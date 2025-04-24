document.addEventListener('DOMContentLoaded', function() {
    const selectedChapters = JSON.parse(localStorage.getItem('selectedChapters')).sort((a, b) => b.difficulty - a.difficulty);
    const selectedDays = parseInt(localStorage.getItem('selectedDays'), 10);
    const dailyStudyMinutes = parseInt(localStorage.getItem('selectedTime'), 10) * 60;

    if (!selectedChapters || !selectedDays || !dailyStudyMinutes) {
        console.error('Missing data. Please ensure all selections are made.');
        return;
    }

    const schedules = initializeDailySchedules(selectedDays, dailyStudyMinutes);
    distributeChapters(schedules, selectedChapters, dailyStudyMinutes);
    generatePDF(schedules);
    fetchYouTubeVideos(schedules.map(day => day.sessions.map(session => session.name)).flat());
});

function displayVideos(videos) {
    const container = document.getElementById('youtubeVideos');
    if (!container) {
        console.error('YouTube video container not found.');
        return;
    }

    container.innerHTML = '';  // Clear previous results

    videos.forEach(video => {
        if (!video) return;  // Skip if no video data

        // Create an anchor element that wraps the entire card
        const videoLink = document.createElement('a');
        videoLink.href = `https://www.youtube.com/watch?v=${video.id.videoId}`;
        videoLink.target = '_blank';
        videoLink.style.textDecoration = 'none';
        videoLink.style.color = 'inherit'; // Inherit text color from parent

        // Create the card container
        const card = document.createElement('div');
        card.classList.add('video-card');
        card.style.cursor = 'pointer'; // Indicates the card is clickable

        // Add thumbnail
        const thumbnail = document.createElement('img');
        thumbnail.src = video.snippet.thumbnails.high.url;
        thumbnail.alt = 'Video Thumbnail';
        thumbnail.style.width = '100%';
        thumbnail.style.height = '60%'; // Adjust based on your design
        thumbnail.style.objectFit = 'cover'; // Ensures the image covers the designated area

        // Add title
        const title = document.createElement('h3');
        title.textContent = video.snippet.title;
        title.style.padding = '10px';

        // Assemble the card
        card.appendChild(thumbnail);
        card.appendChild(title);
        videoLink.appendChild(card);
        container.appendChild(videoLink);
    });
}




function initializeDailySchedules(days, studyMinutes) {
    return Array.from({ length: days }, () => ({ totalTime: 0, sessions: [] }));
}

function calculateChapterTime(difficulty) {
    const baseTime = 45; // Base time for the simplest subject
    return baseTime + (difficulty * 15); // Increase time for each level of difficulty
}

function distributeChapters(schedules, chapters, dailyStudyMinutes) {
    let dayIndex = 0;
    chapters.forEach(chapter => {
        const chapterTime = calculateChapterTime(chapter.difficulty);
        const session = {
            name: chapter.name,
            duration: chapterTime,
            difficulty: chapter.difficulty,
            type: 'Study'
        };

        // Find a schedule day with enough remaining time
        while (dayIndex < schedules.length && schedules[dayIndex].totalTime + chapterTime > dailyStudyMinutes) {
            dayIndex++; // Move to the next day if current day is full
        }

        if (dayIndex < schedules.length) {
            schedules[dayIndex].sessions.push(session);
            schedules[dayIndex].totalTime += chapterTime;
        }
    });

    // Add revision sessions at the end of each day based on the sessions of that day
    schedules.forEach(schedule => {
        schedule.sessions.forEach(session => {
            schedule.sessions.push({
                name: `Revision: ${session.name}`,
                duration: Math.round(session.duration * 0.5), // Half the duration of the original session
                difficulty: session.difficulty,
                type: 'Revision'
            });
        });
    });
}

function generatePDF(schedules) {
    const doc = new jspdf.jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    doc.setFont("helvetica", "bold");
    const quotes = [
        "The secret of getting ahead is getting started. – Mark Twain",
        "It always seems impossible until it’s done. – Nelson Mandela",
        "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
        "Whether you think you can or you think you can’t, you’re right. – Henry Ford",
        "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb"
    ];

    schedules.forEach((schedule, dayIndex) => {
        if (dayIndex > 0) doc.addPage();

        doc.setFillColor(245, 245, 245); // Light gray background
        doc.rect(0, 0, 210, 297, 'F');

        doc.setTextColor(120, 20, 40); // Deep red
        doc.setFontSize(16);
        doc.text(`Day ${dayIndex + 1} Schedule`, 14, 20);
        doc.setFontSize(11);
        doc.setTextColor(60, 80, 100); // Dark grey for quote
        doc.text(quotes[dayIndex % quotes.length], 14, 30);

        // Table for each day's schedule
        const startY = 40;
        const bodyRows = schedule.sessions.map(sess => [sess.name, `${sess.duration} mins`, sess.type]);
        doc.autoTable({
            startY: startY,
            head: [['Session', 'Duration', 'Type']],
            body: bodyRows,
            theme: 'grid',
            styles: { fontSize: 10, font: 'courier' },
            headStyles: { fillColor: [22, 160, 133], textColor: 255 },
            columnStyles: { 0: { cellWidth: 100 }, 1: { cellWidth: 45 }, 2: { cellWidth: 45 } },
            didDrawPage: function(data) {
                // Add a checklist at the bottom of each page
                let checklistStartY = data.cursor.y + 10; // Start the checklist a bit below the table
                doc.setTextColor(40, 120, 180); // Soft blue for checklist header
                doc.setFontSize(12);
                doc.text('Today’s Topics Checklist:', 14, checklistStartY);
                checklistStartY += 10;

                schedule.sessions.forEach(session => {
                    doc.setFontSize(10);
                    doc.setTextColor(0); // Black text
                    doc.text(`[ ] ${session.name}`, 14, checklistStartY);
                    checklistStartY += 7;
                });
            }
        });
    });

    doc.addPage();
    doc.setTextColor(120, 20, 40); // Deep red
    doc.setFontSize(16);
    doc.text("Master Timetable", 14, 20);

    let masterY = 30;
    let masterRows = [];
    schedules.forEach((schedule, dayIndex) => {
        schedule.sessions.forEach(session => {
            masterRows.push([`Day ${dayIndex + 1}`, session.name, `${session.duration} mins`, session.type]);
        });
    });

    doc.autoTable({
        startY: masterY,
        head: [['Day', 'Session', 'Duration', 'Type']],
        body: masterRows,
        theme: 'grid',
        styles: { fontSize: 10, font: 'courier' },
        headStyles: { fillColor: [22, 160, 133], textColor: 255 },
        columnStyles: {
            0: { cellWidth: 20 },
            1: { cellWidth: 85 },
            2: { cellWidth: 35 },
            3: { cellWidth: 35 }
        }
    });

    doc.save('StudyTimetable.pdf');
}

function fetchYouTubeVideos(chapterNames) {
    const apiKey = 'xyz';  // Use your actual API key
    const videoFetchPromises = chapterNames.map(name => {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${encodeURIComponent(name)}&part=snippet&type=video&maxResults=1`;
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length) {
                    return data.items[0];  // Return the first item for each chapter
                }
                return null;  // Return null if no items found
            })
            .catch(error => {
                console.error('Error fetching YouTube videos:', error);
                return null;  // Return null on error
            });
    });

    Promise.all(videoFetchPromises).then(videos => {
        const validVideos = videos.filter(video => video !== null);  // Filter out null results
        displayVideos(validVideos);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const selectedChapters = JSON.parse(localStorage.getItem('selectedChapters'));
    const container = document.getElementById('content');

    if (selectedChapters && selectedChapters.length > 0) {
        const selectedChaptersHeader = document.createElement('h2');
        selectedChaptersHeader.textContent = 'Selected Chapters:';
        container.appendChild(selectedChaptersHeader);

        const selectedChaptersList = document.createElement('ul');
        selectedChapters.forEach(chapter => {
            const chapterItem = document.createElement('li');
            chapterItem.textContent = `${chapter.name} (Difficulty: ${chapter.difficulty})`;
            selectedChaptersList.appendChild(chapterItem);
        });
        container.appendChild(selectedChaptersList);
    }

    const daysInput = document.createElement('input');
    daysInput.type = 'number';
    daysInput.id = 'days';
    daysInput.placeholder = 'Number of Days';
    container.appendChild(daysInput);

    const timeInput = document.createElement('input');
    timeInput.type = 'text';
    timeInput.id = 'time';
    timeInput.placeholder = 'Total Hours Per Day';
    container.appendChild(timeInput);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
        const selectedDays = document.getElementById('days').value;
        const selectedTime = document.getElementById('time').value;

        if (!selectedDays || !selectedTime) {
            alert('Please fill in both fields.');
            return;
        }

        localStorage.setItem('selectedDays', selectedDays);
        localStorage.setItem('selectedTime', selectedTime);

        window.location.href = 'timetable_generator.html';
    });
    container.appendChild(submitButton);
});

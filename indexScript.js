document.addEventListener('DOMContentLoaded', function() {
    const courseSelect = document.getElementById('course');
    const semesterSelect = document.getElementById('semester');
    const continueButton = document.getElementById('continue');

    for (let i = 1; i <= 8; i++) {
        let option = document.createElement('option');
        option.value = `Semester ${i}`;
        option.textContent = `Semester ${i}`;
        semesterSelect.appendChild(option);
    }

    continueButton.addEventListener('click', function() {
        const selectedCourse = courseSelect.value;
        const selectedSemester = semesterSelect.value;

        
        if (!selectedCourse || !selectedSemester) {
            alert('Please select both a course and a semester.');
            return;
        }

        localStorage.setItem('selectedCourse', selectedCourse);
        localStorage.setItem('selectedSemester', selectedSemester);

        window.location.href = 'courses.html';
    });
});

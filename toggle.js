document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('darkModeToggle');
    const body = document.body;

    // Load saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);

        if (currentTheme === 'dark-mode') {
            toggleSwitch.checked = true;
        }
    }

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', '');
        }
    });
});

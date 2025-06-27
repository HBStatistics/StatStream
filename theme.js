document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    
    // Function to set the theme
    const applyTheme = (theme) => {
        // Remove existing theme classes and add the new one
        document.body.classList.remove('dark-theme', 'light-theme');
        document.body.classList.add(theme + '-theme');

        // Update the button icon based on the new theme
        if (themeToggleButton) {
            themeToggleButton.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }
        // Save the user's preference in localStorage
        localStorage.setItem('theme', theme);
    };

    // On page load, get the saved theme or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(currentTheme);

    // Add a click listener to the toggle button
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            // Determine the new theme and apply it
            const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }
});
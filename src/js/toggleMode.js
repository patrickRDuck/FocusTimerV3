const buttonToggleMode = document.getElementById('toggle-mode');

buttonToggleMode.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})
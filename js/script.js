document.addEventListener('DOMContentLoaded', () => {

    const checkbox= document.getElementById('dark-mode-checkbox');

    checkbox.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });

});
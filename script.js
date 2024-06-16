
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const infoDiv = document.getElementById('info');

    toggleButton.addEventListener('click', () => {
        if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
            infoDiv.style.display = 'block';
        } else {
            infoDiv.style.display = 'none';
        }
    });
});

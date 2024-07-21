document.addEventListener("DOMContentLoaded", function() {
    const musicControl = document.getElementById('music-control');
    const backgroundMusic = document.getElementById('background-music');

    musicControl.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicControl.textContent = 'Pausar Música';
        } else {
            backgroundMusic.pause();
            musicControl.textContent = 'Reproducir Música';
        }
    });
});

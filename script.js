const audio = document.getElementById('radio-stream');
const playPauseBtn = document.getElementById('play-pause-btn');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerText = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.innerText = 'Play';
    }
});
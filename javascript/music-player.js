const musicInfoContainer = document.querySelector(".music-info");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("audio");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");
const title = document.querySelector("#title");
const artist = document.querySelector("#cover");
const timeElapsed = document.querySelector(".time-elapsed");
const songDuration = document.querySelector(".song-duration");

const songs = ["song1", "song2", "song3"];

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
    // title.innerText = song;
    audio.src = `src/songs/${song}.mp3`;
}

function playSong() {
    musicInfoContainer.classList.add("play");
    playBtn.classList.remove("fa-play");

    audio.play();
}

function pauseSong() {
    musicInfoContainer.classList.remove("play");
    playBtn.classList.add("fa-play");

    audio.pause();
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    let date = new Date(duration * 1000);
    let time = new Date(currentTime * 1000);
    if (duration) {
        songDuration.innerHTML = date.getMinutes() + ":" + date.getSeconds();
    }
    if (currentTime) {
        timeElapsed.innerHTML = time.getMinutes() + ":" + time.getSeconds();
    }
    // new Date(currentTime)
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener("click", () => {
    const isPlaying = musicInfoContainer.classList.contains("play");
    if (isPlaying) pauseSong();
    else playSong();
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);

progressBar.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);

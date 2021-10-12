const musicContainer = document.querySelector('music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//song titles
const songs = ['another-love' , 'love-nwantiti', 'me-pase'];

let songIndex = 1;

loadSong(songs[songIndex]);

//update songs detailes
function loadSong(song){
    title.innerText = song;
    audio.src = `./music/${song}.mp3` ;
    cover.src = `./images/${song}.jpg` ;
}
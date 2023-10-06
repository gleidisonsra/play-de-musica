

let music = document.querySelector("audio");
let indexMusic = 0;

let fullTimeMusic = document.querySelector(".endMusic");
let image = document.querySelector('img');
let nameMusic = document.querySelector('.description h2');
let nameArtist = document.querySelector('.description i');


randomMusic(indexMusic);

//Events
document.querySelector(".button-play").addEventListener('click', playMusic);

document.querySelector(".button-pause").addEventListener('click', pauseMusic);

music.addEventListener('timeupdate', statusBar);

document.querySelector(".previous").addEventListener('click', () => {
    indexMusic--;
    if (indexMusic < 0) {
        indexMusic =musics.length;
        
    }
    randomMusic(indexMusic);
    document.querySelector(".button-pause").style.display = "none";
    document.querySelector(".button-play").style.display = "block";
});

document.querySelector(".next").addEventListener('click', () => {
    indexMusic++;
    if (indexMusic > musics.length) {
        indexMusic =0;
        
        
    }
   
    randomMusic(indexMusic);
    document.querySelector(".button-pause").style.display = "none";
    document.querySelector(".button-play").style.display = "block";
    
});


function randomMusic(index) {
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        nameMusic.textContent = musics[index].title;
        nameArtist.textContent = musics[index].artist;
        image.src = musics[index].img;
        fullTimeMusic.textContent = secondesToMinutes(Math.floor(music.duration));
    });
};

function playMusic() {
    music.play();
    document.querySelector(".button-pause").style.display = "block";
    document.querySelector(".button-play").style.display = "none";
};
function pauseMusic() {
    music.pause();
    document.querySelector(".button-pause").style.display = "none";
    document.querySelector(".button-play").style.display = "block";

};
function statusBar() {
    let bar = document.querySelector("progress");
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';

    let elapsedTime = document.querySelector(".initial");
    elapsedTime.textContent = secondesToMinutes(Math.floor(music.currentTime));

};

function secondesToMinutes(seconds) {
    let fieldMinutes = Math.floor(seconds / 60);
    let fieldSeconds = seconds % 60;
    if (fieldSeconds < 10) {
        fieldSeconds = '0' + fieldSeconds;

    }
    return fieldMinutes + ':' + fieldSeconds;

};


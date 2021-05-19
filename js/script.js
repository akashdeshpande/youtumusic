let elapsed = document.querySelector('#time-elapsed');
let duration = document.querySelector('#time-duration');
let progressbar = document.querySelector('#progressbar');

progressbar.addEventListener('mousemove', () => {
    let progressbarValue = progressbar.value;
    let color = `linear-gradient(90deg, var(--accent) ${progressbarValue}%, var(--slider-color) ${progressbarValue}%)`;
    progressbar.style.background = color;
});

//play to pause
let playbtn = document.querySelector('.play-btn');

playbtn.addEventListener('click', () => {
    if(playbtn.classList.contains("fa-play")){
        playbtn.classList.remove("fa-play");
        playbtn.classList.add("fa-pause");
    }
    else {
        playbtn.classList.remove("fa-pause");
        playbtn.classList.add("fa-play");
    }
    
});

// toggle heart

let heartbtn = document.querySelector('.song-detail-like-icon');

heartbtn.addEventListener('click', () => {
    if(heartbtn.classList.contains("fa")){
        heartbtn.classList.remove("fa");
        heartbtn.classList.add("far");
    }
    else {
        heartbtn.classList.remove("far");
        heartbtn.classList.add("fa");
    }
    
});
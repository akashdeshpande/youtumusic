let elapsed = document.querySelector('#time-elapsed');
let duration = document.querySelector('#time-duration');
let progressbar = document.querySelector('#progressbar');

progressbar.addEventListener('mousemove', () => {
    let progressbarValue = progressbar.value;
    let color = `linear-gradient(90deg, var(--accent) ${progressbarValue}%, var(--slider-color) ${progressbarValue}%)`;
    progressbar.style.background = color;
});
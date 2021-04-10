const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startButton: document.querySelector('button[data-action="start"]'),
    stopButton: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
};

let newColor = null;

function randomIntegerFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
    refs.startButton.disabled = true;
    newColor = setInterval(() => {
        const randomNumber = randomIntegerFromInterval(0, colors.length - 1)
        refs.body.style.backgroundColor = colors[randomNumber];
    }, 1000);
    return newColor
};

function stopChangeColor() {
    clearInterval(newColor);
    refs.startButton.disabled = false;
};

refs.startButton.addEventListener("click", changeColor);
refs.stopButton.addEventListener("click", stopChangeColor);
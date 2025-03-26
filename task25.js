let train = document.getElementById("train");
let position = 0;
let animation;

function startTrain() {
    clearInterval(animation); // Prevent multiple intervals
    animation = setInterval(() => {
        if (position < window.innerWidth) {
            position += 5;
            train.style.left = position + "px";
        } else {
            position = -200; // Reset to start when it reaches end
        }
    }, 50);
}

function stopTrain() {
    clearInterval(animation);
}

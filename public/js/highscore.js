const audio = require("../assets")

window.onload = function () {
    var elevator = new Elevator({
        mainAudio: '/assets/audio.mp3',
        endAudio: '/assets/end-audio.mp3'
    });
    return elevator
}

elevator.elevate();


let level = 0;
let prevScore = 0;

const levelToType = () => {
    level = JSON.parse(localStorage.getItem('game'))?.level || 1;
    prevScore = JSON.parse(localStorage.getItem('game'))?.score || 0;
    let photoType;

    if (level == 1) {
        photoType = 'soup';
    } else if (level == 2) {
        photoType = 'sandwich';
    } else if (level == 3) {
        photoType = 'salad';
    } else if (level == 4) {
        photoType = 'highscore';
        level = 1;
        prevScore = 0;
    } else {
        console.log('--- error: level not 1, 2, or 3');
    };

    // fetch photos with photoType
    // call to database using photoRoute
    // return the response
    // const photoArr = res.json

    return photoType;
};



levelToType();

const submitResults = async (event) => {
    event.preventDefault();

    const randomScore = Math.floor(Math.random() * -100);

    alert(`Score: ${randomScore}\nAt least you finsihed the level. 😈 Loser 💖`);

    level++;
    // if(level > 3) {
    //     level -= 4;
    //     window.location.replace(`/game/highscore`);
    // };

    let obj = {
        level: level,
        score: prevScore += randomScore
    }
    console.log(obj);
    localStorage.setItem('game', JSON.stringify(obj));

    window.location.replace(`/game/${levelToType()}`)

};

const randomAlert = () => {
    const messages = ["Are you sure???", "Think again.", "Looks weird to me.", "HAHAHAHA"];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    if (Math.random() < 0.6) {
        alert(randomMessage);
    }
}

document
    .querySelector('.submit-results')
    .addEventListener('click', submitResults);

document
    .querySelectorAll(".radio-button").forEach(button => {
        button.addEventListener("click", randomAlert)
    });

document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', delButtonHandler);
});
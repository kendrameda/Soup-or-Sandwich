let level = 0;
console.log('--- game.js is running');
const levelToType = () => {
    console.log('---im in level to type function');
    level = JSON.parse(localStorage.getItem('game'))?.level || 1;
    console.log('---level: ', level);
    let photoType;

    if (level == 1) {
        photoType = 'soup';
    } else if (level == 2){
        photoType = 'sandwich';
    } else if (level == 3){
        photoType = 'salad';
    } else if (level == 4) {
        photoType = 'highscore';
        level = 1;
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
    console.log('---submitting results');
    console.log(level);
  
    const randomScore = Math.floor(Math.random() * -100);

    alert(`Score: ${randomScore}\nAt least you finsihed the level. 😈 Loser 💖`);
    
    level++; 
    // if(level > 3) {
    //     level -= 4;
    //     window.location.replace(`/game/highscore`);
    // };
    
    let prevScore = JSON.parse(localStorage.getItem('game'))?.score || 0;
    let obj = {
        level: level,
        score: prevScore += randomScore
    }
    console.log(obj);
    localStorage.setItem('game', JSON.stringify(obj));

    window.location.replace(`/game/${levelToType()}`)
    
    
  };

  document
  .querySelector('.submit-results')
  .addEventListener('click', submitResults);

// submitResults();
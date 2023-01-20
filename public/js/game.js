let level = 0;
let prevScore = 0;
console.log('--- game.js is running');
const levelToType = () => {
    console.log('---im in level to type function');
    level = JSON.parse(localStorage.getItem('game'))?.level || 1;
    score = JSON.parse(localStorage.getItem('game'))?.highScore || 0;
    console.log('---level: ', level);
    let photoType;

    if (level == 1) {
        photoType = 'soup';
    } else if (level == 2){
        photoType = 'sandwich';
    } else if (level == 3){
        photoType = 'salad';
    } else if (level == 4) {
        let scoreName = prompt('Enter a usernamee to save your lowsco- Imean your highscore');
        
        const loadScore = async (req, res) => {
            await fetch('/api/highscore', {
            method: 'POST',
            body: JSON.stringify({ scoreName, score }),
            headers: { 'Content-Type': 'application/json' },
          });}
        loadScore();
        
        photoType = 'highscore';
        let obj = {
            level: 1,
            score: 0
        };
        localStorage.setItem('game', JSON.stringify(obj))

    } else {
        console.log('--- error: level not 1, 2, or 3');
    };

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
    
    let obj = {
        level: level,
        highScore: score += randomScore
    }
    console.log(obj);
    localStorage.setItem('game', JSON.stringify(obj));

    let highScore = await levelToType();
    window.location.replace(`/game/${highScore}`)
    
    
  };

  document
  .querySelector('.submit-results')
  .addEventListener('click', submitResults);

// submitResults();
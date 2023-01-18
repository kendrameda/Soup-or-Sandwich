let level = 0;
console.log('asdfas');
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
    } else {
        console.log('--- error: level not 1, 2, or 3');
    }
};

levelToType();

const submitResults = async (event) => {
    event.preventDefault();
    console.log('---submitting results');
    console.log(level);
  
    const randomScore = Math.floor(Math.random() * -100);
    alert(`Score: ${randomScore}\nAt least you finsihed the level. 😈 Loser 💖`);
    level++;
    let prevScore = JSON.parse(localStorage.getItem('game'))?.score || 0;
    let obj = {
        level: level,
        score: prevScore += randomScore
    }
    localStorage.setItem('game', JSON.stringify(obj));
    levelToType();
    
    
  };

  document
  .querySelector('.submit-results')
  .addEventListener('click', submitResults);

submitResults();
const startBttn = document.querySelector('#start-button');

startBttn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    window.location.replace("localhost:3001/login");
})


const bttn = document.querySelector("#button");

bttn.addEventListener('click', function() {
    console.log('button pressed');
    alert("button pressed");
})
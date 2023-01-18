const startBttn = document.querySelector('#start-button');

startBttn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    window.location.replace("localhost:3001/login");
});

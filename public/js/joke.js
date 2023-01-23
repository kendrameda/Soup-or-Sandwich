const startBttn = document.querySelectorAll('.start-button');

startBttn.forEach(oneBtn => {
    oneBtn.addEventListener("click", function (event) {
        event.preventDefault();
        alert(`HAHA that's not the real game silly.\nYou have to login first.`);
        window.location.replace("/auth/login");
    })
});

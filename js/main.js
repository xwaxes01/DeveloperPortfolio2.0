window.onload = function () {
    const curtainLeft = document.getElementById("curtain-left")
    const curtainRight = document.getElementById("curtain-right")

    curtainLeft.classList.add("animated-curtain-draw")
    curtainRight.classList.add("animated-curtain-draw")

    const welcomeText = document.getElementById("welcome-text")
    welcomeText.classList.add("animated-welcome-text")

    setTimeout(function() {
        welcomeText.innerHTML = "Welcome to my portfolio"
        welcomeText.classList.add("animated-welcome-text")
    }, 9000);
}
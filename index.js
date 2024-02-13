var scale = 1;

function redirectToCelebration() {
    window.location.href = "celebration.html"
}

function sad() {
    // Decrease the button size
    scale -= .1;
    var button = document.getElementById("no");
    button.style.transform = "scale(" + scale + ")"
}
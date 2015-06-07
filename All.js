function Home() {
    window.location.href = 'index.html';
}

function Animation() {
    window.location.href = 'Animation.html';
}

function LiveAction() {
    window.location.href = 'LiveAction.html';
}

function Pixar() {
    window.location.href = 'Pixar.html';
}
function ThemeParks() {
    window.location.href = 'ThemeParks.html';
}

function toggleMe(a) {
    var e = document.getElementById(a);
    if(!e) return true;
    if(e.style.display == "none") {
        e.style.display = "block";
    } else {
        e.style.display = "none";
    }
    return false;
}
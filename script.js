function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
const texts = [
    "STUDENT",
    "DEVALOPER",
    "SCRIPTER"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter

const themeToggleButton = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.body.classList.add(currentTheme);
}

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark-theme");
    } else {
        localStorage.setItem("theme", "light-theme");
    }
});

    let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    setInterval(() => {
    nextSlide();
    }, 5000);

    slides.forEach(slide => slide.classList.remove('active'));

    slides[currentIndex].classList.add('active');
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

showSlide(currentIndex);

window.addEventListener('click' , function*() {
    document.getElementById('bgmusic').onplay();
}, {once: true});

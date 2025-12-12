const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const phrases = [
    "Elevate Your Fitness",
    "Train With Confidence",
    "Become the Best Version of You"
];

let index = 0;
let typingSpeed = 80;
let displayTime = 1200;

const typingEl = document.getElementById("typing");

function typeText(text, i = 0) {
    typingEl.style.opacity = 1;
    if (i < text.length) {
        typingEl.textContent += text.charAt(i);
        setTimeout(() => typeText(text, i + 1), typingSpeed);
    } else {
        setTimeout(() => fadeOut(), displayTime);
    }
}

function fadeOut() {
    typingEl.style.transition = "opacity 0.6s";
    typingEl.style.opacity = 0;
    
    setTimeout(() => {
        typingEl.textContent = "";
        index = (index + 1) % phrases.length;
        typeText(phrases[index]);
    }, 600);
}

typeText(phrases[index]);


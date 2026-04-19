// Simple scroll animation
const projects = document.querySelectorAll('.project');

window.addEventListener('scroll', () => {
    projects.forEach(p => {
        const position = p.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            p.style.opacity = 1;
            p.style.transform = "translateY(0)";
        }
    });
});
const textArray = [
    "A Web Developer 💻",
    "A Java Programmer ☕",
    "A Problem Solver 🚀"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const typing = document.querySelector(".typing");

    if (index >= textArray.length) index = 0;

    currentText = textArray[index];

    if (!isDeleting) {
        typing.textContent = currentText.substring(0, charIndex++);
    } else {
        typing.textContent = currentText.substring(0, charIndex--);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Save preference
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}
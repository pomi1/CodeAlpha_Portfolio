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
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

// theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        toggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
        localStorage.setItem("theme", "light");
    }
});
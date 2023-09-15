const lightThemeButton = document.getElementById("lightThemeButton");
const darkThemeButton = document.getElementById("darkThemeButton");
const body = document.body;

// Check for the selected theme in local storage and apply it
const savedTheme = localStorage.getItem("selectedTheme");

if (savedTheme) {
    body.classList.add(savedTheme);
}

lightThemeButton.addEventListener("click", () => {
    body.classList.remove("dark-theme");
    localStorage.setItem("selectedTheme", "");
});

darkThemeButton.addEventListener("click", () => {
    body.classList.add("dark-theme");
    localStorage.setItem("selectedTheme", "dark-theme");
});
const text = "Frankensite";
const typingSpeed = 150;
let index = 0;

function typeText() {
  const typed = document.getElementById("typed");
  if (index < text.length) {
    typed.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, typingSpeed);
  }
}

window.onload = () => {
  typeText();

  // Load dark mode preference on page load
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }

  // Toggle dark mode and save preference
  document.getElementById("toggle-mode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  });
};

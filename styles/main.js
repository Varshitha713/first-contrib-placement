const themeToggleBtn = document.getElementById("themeToggle");
const body = document.body;
const logo = document.getElementById("logo");

// Default: light mode
body.classList.add("light");

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  // Update logo
  if (body.classList.contains("dark")) {
    logo.src = "logo-dark.png";
    themeToggleBtn.textContent = "☀";
  } else {
    logo.src = "logo-light.png";
    themeToggleBtn.textContent = "🌙";
  }
});
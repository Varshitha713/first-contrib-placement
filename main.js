// Wait for DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("toggle-mode");
  const body = document.body;

  if (!themeToggleBtn) {
    console.error("Toggle button not found in DOM.");
    return;
  }

  // Load theme from localStorage or default to light
  const savedTheme = localStorage.getItem("theme") || "light";
  body.classList.add(savedTheme);
  updateToggleIcon(savedTheme);

  // Toggle theme on button click
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = body.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    body.classList.remove("light", "dark");
    body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    updateToggleIcon(newTheme);
  });

  // Update emoji icon on toggle button
  function updateToggleIcon(theme) {
    themeToggleBtn.textContent = theme === "dark" ? "🌞" : "🌜";
  }

  // ===== Back to Top Button =====
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ===== Search and Filter Cards =====
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  function searchAndFilter() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const cardCategory = card.getAttribute("category");

      const matchesSearch = text.includes(searchText);
      const matchesCategory = selectedCategory === "all" || cardCategory === selectedCategory;

      if (matchesSearch && matchesCategory) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  }

  searchInput.addEventListener("input", searchAndFilter);
  categoryFilter.addEventListener("change", searchAndFilter);
});

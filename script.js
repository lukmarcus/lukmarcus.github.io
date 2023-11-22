window.onload = function () {
  window.parent.postMessage(
    { type: "size", height: document.body.scrollHeight, width: document.body.scrollWidth },
    "*"
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const switchLangButton = document.getElementById("switch-lang");

  // Initialize the button text based on the current language
  const updateButtonText = (lang) => {
    switchLangButton.textContent = lang === "en" ? "Switch to PL" : "Przełącz na EN";
  };

  // Set the initial button text and get the current language
  let currentLang = switchLangButton.getAttribute("data-current-lang");
  updateButtonText(currentLang);

  // Add click event listener to toggle language and update button text
  switchLangButton.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "pl" : "en";
    switchLangButton.setAttribute("data-current-lang", currentLang);
    updateButtonText(currentLang);

    // Toggle elements based on the language
    document.querySelectorAll("[data-lang]").forEach((el) => {
      el.style.display = el.getAttribute("data-lang") === currentLang ? "" : "none";
    });
  });
});

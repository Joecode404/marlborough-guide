document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-map-url]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const url = button.getAttribute("data-map-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
});
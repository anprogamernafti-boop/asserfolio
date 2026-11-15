const yearLabel = document.querySelector("[data-current-year]");

if (yearLabel) {
  yearLabel.textContent = String(new Date().getFullYear());
}

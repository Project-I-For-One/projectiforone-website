document.addEventListener("DOMContentLoaded", () => {
  const inject = async (sel, url) => {
    const el = document.querySelector(sel);
    if (!el) return;
    const res = await fetch(url);
    el.innerHTML = await res.text();
  };
  inject("[data-include='header']", "/partials/header.html");
  inject("[data-include='footer']", "/partials/footer.html");
});
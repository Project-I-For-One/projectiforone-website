async function injectPartial(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  const res = await fetch(url);
  el.innerHTML = await res.text();
}
document.addEventListener("DOMContentLoaded", () => {
  injectPartial("[data-include='header']", "/partials/header.html");
  injectPartial("[data-include='footer']", "/partials/footer.html");
});
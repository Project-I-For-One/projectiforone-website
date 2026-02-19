async function injectPartial(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error(`Failed to load ${url}`);
    el.innerHTML = await res.text();
  } catch (e) {
    // fail silently in production; show minimal info for debugging
    el.innerHTML = "";
    console.error(e);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  injectPartial("[data-include='header']", "/partials/header.html");
  injectPartial("[data-include='footer']", "/partials/footer.html");
});

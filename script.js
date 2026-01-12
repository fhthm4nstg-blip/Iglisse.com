// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mega menu (desktop)
document.querySelectorAll("[data-mega]").forEach((btn) => {
  const id = btn.getAttribute("data-mega");
  const panel = document.getElementById(id);

  const open = () => {
    btn.setAttribute("aria-expanded", "true");
    panel.style.display = "block";
  };
  const close = () => {
    btn.setAttribute("aria-expanded", "false");
    panel.style.display = "none";
  };

  btn.addEventListener("mouseenter", open);
  btn.addEventListener("focus", open);

  btn.parentElement.addEventListener("mouseleave", close);

  // Close if user clicks outside
  document.addEventListener("click", (e) => {
    if (!btn.parentElement.contains(e.target)) close();
  });
});

// Mobile drawer
const drawer = document.getElementById("mobileNav");
const burgerBtn = document.getElementById("burgerBtn");
const closeDrawer = document.getElementById("closeDrawer");

function openDrawer() {
  drawer.hidden = false;
  burgerBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}
function hideDrawer() {
  drawer.hidden = true;
  burgerBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

burgerBtn?.addEventListener("click", openDrawer);
closeDrawer?.addEventListener("click", hideDrawer);

// Close drawer with ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !drawer.hidden) hideDrawer();
});

// Search modal
const searchModal = document.getElementById("searchModal");
const searchBtn = document.getElementById("searchBtn");
const closeSearch = document.getElementById("closeSearch");

function openSearch() {
  searchModal.hidden = false;
  document.body.style.overflow = "hidden";
}
function hideSearch() {
  searchModal.hidden = true;
  document.body.style.overflow = "";
}

searchBtn?.addEventListener("click", openSearch);
closeSearch?.addEventListener("click", hideSearch);

searchModal?.addEventListener("click", (e) => {
  if (e.target === searchModal) hideSearch();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !searchModal.hidden) hideSearch();
});

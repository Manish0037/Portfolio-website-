const header = document.querySelector(".site-header");

const setHeaderState = () => {
  header.dataset.elevated = String(window.scrollY > 24);
};

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

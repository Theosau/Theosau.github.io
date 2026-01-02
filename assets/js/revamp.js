(() => {
  const masthead = document.querySelector(".masthead");
  if (masthead) {
    const onScroll = () => {
      masthead.classList.toggle("masthead--scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
})();

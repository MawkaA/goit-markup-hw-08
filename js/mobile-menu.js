(() => {
  const refs = {
    openMobileBtn: document.querySelector(".mobil-open"),
    closeModalBtn: document.querySelector(".mobile-close"),
    mobil: document.querySelector(".mobil"),
  };

  refs.openMobilBtn.addEventListener("click", toggleMobil);
  refs.closeMobilBtn.addEventListener("click", toggleMobil);

  function toggleMobil() {
    refs.mobil.classList.toggle("is-hidden");
  }
})();
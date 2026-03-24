const modal = document.querySelector(".header__form-modal");
const btn = document.querySelector(".header__contact button");
const overlayModal = document.querySelector(".header__overlay");

btn.addEventListener("click", (event) => {
  modal.classList.add("header__modal-active");
  overlayModal.classList.add("header__modal-active");

  document.addEventListener("click", (event) => {
    if (
      event.target.classList.contains('header__overlay') ||
      event.target.classList.contains('header__modal-close')
    ) {
      modal.classList.remove("header__modal-active");
      overlayModal.classList.remove("header__modal-active");
    }
  });
});

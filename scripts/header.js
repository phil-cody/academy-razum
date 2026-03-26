const modal = document.querySelector(".header__form-modal");

const menu = document.querySelector(".header__burger-menu");
const burgerBtn = document.querySelector(".header__burger");

const overlay = document.querySelector(".header__overlay");

const triggers = document.querySelectorAll('[data-open-modal]');

triggers.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    openModal();
  })
})

let isModalOpen = false;
let isMenuOpen = false;

function openModal() {
  if (isMenuOpen) closeMenu();

  modal.classList.add("header__modal-active");
  overlay.classList.add("active");

  isModalOpen = true;
}

function closeModal() {
  modal.classList.remove("header__modal-active");
  isModalOpen = false;

  if (!isMenuOpen) overlay.classList.remove("active");
}

function openMenu() {
  closeModal();

  menu.classList.add("burger-menu__open");
  overlay.classList.add("active");

  isMenuOpen = true;
}

function closeMenu() {
  menu.classList.remove("burger-menu__open");
  isMenuOpen = false;

  if (!isModalOpen) overlay.classList.remove("active");
}

burgerBtn.addEventListener("click", openMenu);

document.addEventListener("click", (event) => {
  const target = event.target;

  if (
    isModalOpen &&
    (
      target.classList.contains("header__overlay") ||
      target.classList.contains("header__modal-close")
    )
  ) {
    closeModal();
  }

  if (
    isMenuOpen &&
    (
      target.classList.contains("header__overlay") ||
      target.classList.contains("header__burger-close") ||
      target.closest(".header__burger-close")
    )
  ) {
    closeMenu();
  }
});
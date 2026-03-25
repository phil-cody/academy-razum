const modal = document.querySelector(".header__form-modal");
const btn = document.querySelector(".header__contact button");
const modalBtn = document.querySelector('.burger-menu__contact .btn');

const menu = document.querySelector(".header__burger-menu");
const burgerBtn = document.querySelector(".header__burger");

const overlay = document.querySelector(".header__overlay");

// состояния
let isModalOpen = false;
let isMenuOpen = false;


// --- функции ---

function openModal() {
  closeMenu();

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


// --- кнопки ---

btn.addEventListener("click", openModal);
modalBtn.addEventListener("click", openModal);

burgerBtn.addEventListener("click", openMenu);


// --- единый обработчик клика ---

document.addEventListener("click", (event) => {
  const target = event.target;

  // закрытие модалки
  if (
    isModalOpen &&
    (
      target.classList.contains("header__overlay") ||
      target.classList.contains("header__modal-close")
    )
  ) {
    closeModal();
  }

  // закрытие меню
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
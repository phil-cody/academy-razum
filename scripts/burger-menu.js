const menu = document.querySelector(".header__burger-menu");
const button = document.querySelector(".header__burger");
const overlayMenu = document.querySelector(".header__overlay");

button.addEventListener('click', (event) => {
  menu.classList.add("burger-menu__open");
  overlayMenu.classList.add("overlay");

  document.addEventListener("click", (event) => {
    if (
      event.target.classList.contains('overlay') ||
      event.target.classList.contains('burger-menu__close')
    ) {
      menu.classList.remove("burger-menu__open");
      overlayMenu.classList.remove("overlay");
    }
  });
});

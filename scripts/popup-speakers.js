const cardArr = Array.from(document.querySelectorAll(".pop-up"));
let overlayPopup = document.querySelector(".speakers__overlay");

for (let i = 0; i < cardArr.length; i++) {
  cardArr[i].addEventListener("click", (event) => {
    if (event.target.classList.contains("slider-card__open-popup")) {
      event.preventDefault();

      const id = cardArr[i].dataset.popup;
      if (!id) return;

      const popup = document.querySelector(`.speakers__popup-card[data-popup="${id}"]`);
      if (!popup) return;

      document.querySelectorAll('.popup-active').forEach(el => {
        el.classList.remove('popup-active');
      });

      popup.classList.add('popup-active');
      overlayPopup.classList.add('popup-active');
    }
  });
}

document.addEventListener('click', event => {
  if (event.target.classList.contains('slider-card__close-popup') || event.target.classList.contains('speakers__overlay')) {
    document.querySelectorAll('.popup-active').forEach(el => {
      el.classList.remove('popup-active');
    });

    overlayPopup.classList.remove('popup-active');
  }
});

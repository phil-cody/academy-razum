const cardArr = Array.from(document.querySelectorAll(".pop-up"));
let popupArr = document.querySelectorAll(".speakers__popup-card");
let overlayPopup = document.querySelector(".speakers__overlay");

for (let i = 0; i < cardArr.length; i++) {

  cardArr[i].addEventListener("click", (event) => {
    if (event.target.classList.contains("slider-card__open-popup")) {
      event.preventDefault();

      popupArr[i].classList.add("popup-active");
      overlayPopup.classList.add("popup-active");

      document.addEventListener("click", (event) => {
        if (
          event.target.classList.contains("slider-card__close-popup") ||
          event.target.classList.contains("speakers__overlay")
        ) {
          popupArr[i].classList.remove("popup-active");
          overlayPopup.classList.remove("popup-active");
        }
      });
    }
  });
}

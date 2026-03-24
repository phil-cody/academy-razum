const sliderArr = Array.from(document.querySelectorAll(".slider"));
const prevArr = Array.from(document.querySelectorAll(".button__prev"));
const nextArr = Array.from(document.querySelectorAll(".button__next"));

for (let i = 0; i < sliderArr.length; i++) {
  const cards = Array.from(sliderArr[i].children);
  const prev = prevArr[i];
  const next = nextArr[i];

  let sliderWidth = sliderArr[i].scrollWidth;
  let viewSliderWidth = sliderArr[i].getBoundingClientRect().width;

  if (sliderArr[i].scrollLeft <= cards[1].offsetLeft) {
    prev.disable = false;
  }

  sliderArr[i].addEventListener("scroll", () => {
    if (sliderWidth - sliderArr[i].scrollLeft <= viewSliderWidth) {
      next.disable = true;
    } else if (sliderArr[i].scrollLeft <= cards[0].offsetLeft) {
      prev.disable = true;
    } else {
      next.disable = false;
      prev.disable = false;
    }
  });

  prev.addEventListener("click", () => {
    const currentScroll = sliderArr[i].scrollLeft;

    let target = null;

    cards.forEach((card) => {
      let i = 0;
      if (card.offsetLeft < currentScroll) {
        target = card;
      }
    });

    if (target) {
      sliderArr[i].scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    }
  });

  next.addEventListener("click", () => {
    const currentScroll = sliderArr[i].scrollLeft;

    let target = null;

    for (let i = cards.length - 1; i >= 0; i--) {
      const card = cards[i];

      if (card.offsetLeft > currentScroll) {
        target = card;
      }
    }

    if (target) {
      sliderArr[i].scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    }
  });
}

const faqBlocks = document.querySelectorAll(".faq-block");

faqBlocks.forEach((block) => {
  const answer = block.querySelector('.faq-text p');

  block.addEventListener("click", (e) => {

    const isActive = block.classList.contains("active");

    faqBlocks.forEach((b) => {
      b.classList.remove("active");
      const otherAnswer = b.querySelector('.faq-text p');
      otherAnswer.style.maxHeight = null;
    });

    if (!isActive) {
      block.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
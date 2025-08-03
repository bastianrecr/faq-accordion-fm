export const faqButtons = document.querySelectorAll(".faq-card__question");

export const toggleFaqAnswer = (button) => {
  const item = button.parentElement;
  const answer = item.querySelector(".faq-card__answer");
  const icon = button.querySelector(".faq-card__icon");

  const isExpanded = answer.classList.toggle("faq-card__answer--active");

  button.setAttribute("aria-expanded", isExpanded);
  icon.src = isExpanded
    ? "./assets/images/icon-minus.svg"
    : "./assets/images/icon-plus.svg";
};

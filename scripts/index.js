import { faqButtons, toggleFaqAnswer } from "../blocks/FaqCard/FaqCard.js";

faqButtons.forEach((button) => {
  button.addEventListener("click", () => toggleFaqAnswer(button));
});

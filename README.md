# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)

- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/design/preview.jpg)

### Links

- Live Site URL: [Add live site URL here](https://bastianrecr.github.io/faq-accordion-fm)

## My process

### Built with

- Semantic HTML5 markup
- BEM (Block Element Modifier) CSS methodology
- CSS custom properties
- Flexbox
- Mobile-first responsive design
- Vanilla JavaScript (modular)
- Accessible interactions using `aria-expanded` and `:focus-visible`

### What I learned

This project helped me reinforce modular JavaScript practices by creating a separate component (`FaqCard`) and exporting its behavior to the main script. I practiced accessibility enhancements by managing `aria-expanded` attributes and using `:focus-visible` to highlight focus when using keyboard navigation.

Here’s the JavaScript logic I’m proud of:

```js
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
```

### Continued development

I'd like to continue improving animations with smoother transitions when expanding and collapsing answers. I'd also like to experiment with accessibility-focused libraries to automatically handle focus states and keyboard traps in more complex components.

### Useful resources

- [MDN Web Docs - \:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
- [A Complete Guide to Flexbox – CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [BEM Methodology](https://getbem.com/introduction/) - Helped me organize my CSS in a scalable way

## Author

- Website - [bastianrecr.github.io](https://bastianrecr.github.io/)
- Frontend Mentor - [@bastianrecr](https://www.frontendmentor.io/profile/bastianrecr)

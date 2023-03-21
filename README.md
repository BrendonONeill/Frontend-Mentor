# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Link

- Live Site URL: [My Solution](https://brendononeill.github.io/Frontend-Mentor/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

Working with the DOM was interesting as I needed to change images and sets css on different buttons to show which was active.

```js
lightboxPrev.addEventListener("click", () => {
  if (productNumber === 1) productNumber = 5;
  productNumber--;
  bigImageLB.firstElementChild.src =
    "images/image-product-" + productNumber + ".jpg";
  let id = 0;
  imageButtonsLB.forEach((button) => {
    if (button.firstElementChild.classList.contains("image-fade-clicked")) {
      button.firstElementChild.classList.remove("image-fade-clicked");
      id = Number(button.firstElementChild.dataset.id);
    }
  });
  id = id - 2;
  if (id < 0) {
    id = id + 4;
  }
  imageButtonsLB[id].firstElementChild.classList.add("image-fade-clicked");
});
```

Working with svg's outside of the image tag and within an object tag was a task to change the colour on hover

```html
<object data="images/icon-plus.svg"></object>
```

### Continued development

Learn to write cleaner javascript files to prevent other files changing my values.
To better understand SVG files and the different ways to work with them.

## Author

- Website - [Brendon O'Neill](https://brendononeill.github.io/Portfolio-Revamp/)
- Frontend Mentor - [@BrendonONeill](https://www.frontendmentor.io/profile/BrendonONeill)

"use strict";
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");
const next = document.querySelector(".next");
const previous = document.querySelector(".prev");
const product = document.querySelector(".product-image");
const addToCart = document.querySelector(".add-to-cart");
const cartBadge = document.querySelector(".cart-badge");
const closeMenu = document.querySelector(".close-menu-button");
const openMenu = document.querySelector(".menu-button");
const offCanvas = document.querySelector(".offCanvas");
const offCanvasBG = document.querySelector(".offCanvas-bg");
const cart = document.querySelector(".modal-body");
const bin = document.querySelector(".bin");
const cartButton = document.querySelector(".cart-button");
const modal = document.querySelector(".modal");
const cartCheckout = document.querySelector(".modal-footer");
const cartText = document.querySelector(".cartPrice");
const cartCal = document.querySelector(".cartCal");
const imageButtons = document.querySelectorAll(".image-button-main");
const bigImage = document.querySelector(".big-main-image");

let productNumber = 1;

//light-box
const imageButtonsLB = document.querySelectorAll(".light-box-container-button");
const bigImageLB = document.querySelector(".light-box-container-img");
const lightbox = document.querySelector(".light-box-bg");
const lightboxButton = document.querySelector(".lb-close");
const lightboxNext = document.querySelector(".lb-next");
const lightboxPrev = document.querySelector(".lb-prev");

plus.addEventListener("click", () => {
  number.innerHTML = Number(number.innerHTML) + 1;
});

minus.addEventListener("click", () => {
  if (Number(number.innerHTML) !== 0) {
    number.innerHTML = Number(number.innerHTML) - 1;
  }
});

next.addEventListener("click", () => {
  if (productNumber === 4) productNumber = 0;
  productNumber++;
  product.src = "images/image-product-" + productNumber + ".jpg";
});

previous.addEventListener("click", () => {
  if (productNumber === 1) productNumber = 5;
  productNumber--;
  product.src = "images/image-product-" + productNumber + ".jpg";
});

addToCart.addEventListener("click", () => {
  if (Number(number.innerHTML) !== 0) {
    console.log(number.innerHTML);
    cartBadge.classList.add("show");
    cartBadge.innerHTML =
      Number(cartBadge.innerHTML) + Number(number.innerHTML);
    number.innerHTML = "0";
    cart.lastElementChild.classList.add("hide");
    cartCheckout.classList.remove("hide");
    cart.firstElementChild.classList.remove("hide");
    cartText.innerHTML = "$125.00 x " + cartBadge.innerHTML;
    cartCal.innerHTML = " $" + 125 * Number(cartBadge.innerHTML) + ".00";
  }
});

bin.addEventListener("click", () => {
  cart.lastElementChild.classList.remove("hide");
  cart.firstElementChild.classList.add("hide");
  cartCheckout.classList.add("hide");
  cartBadge.innerHTML = 0;
  cartBadge.classList.remove("show");
});

openMenu.addEventListener("click", () => {
  offCanvas.style.left = "0";
  offCanvasBG.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  offCanvas.style.left = "-500px";
  offCanvasBG.classList.remove("active");
});

cartButton.addEventListener("click", () => {
  modal.classList.toggle("show");
});

imageButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    clearButtons();
    bigImage.firstElementChild.src =
      "images/image-product-" + e.target.id + ".jpg";
    e.target.classList.add("image-fade-clicked");
    productNumber = Number(e.target.id);
  });
});

bigImage.addEventListener("click", () => {
  lightbox.classList.toggle("hide");
  let test = activeButton();
  console.log(test);
  bigImageLB.firstElementChild.src = bigImage.firstElementChild.src;
  lbclearButtons();
  imageButtonsLB[Number(test) - 1].firstElementChild.classList.add(
    "image-fade-clicked"
  );
});

//light-box
imageButtonsLB.forEach((button) => {
  button.addEventListener("click", (e) => {
    lbclearButtons();
    bigImageLB.firstElementChild.src =
      "images/image-product-" + e.target.dataset.id + ".jpg";
    e.target.classList.add("image-fade-clicked");
    productNumber = Number(e.target.dataset.id);
  });
});

lightboxButton.addEventListener("click", () => {
  lightbox.classList.toggle("hide");
});

lightboxNext.addEventListener("click", () => {
  if (productNumber === 4) productNumber = 0;
  productNumber++;
  bigImageLB.firstElementChild.src =
    "images/image-product-" + productNumber + ".jpg";
  let id = 0;
  imageButtonsLB.forEach((button) => {
    if (button.firstElementChild.classList.contains("image-fade-clicked")) {
      button.firstElementChild.classList.remove("image-fade-clicked");
      id = Number(button.firstElementChild.dataset.id);
    }
  });
  if (id >= 4) {
    id = id - 4;
  }
  imageButtonsLB[id].firstElementChild.classList.add("image-fade-clicked");
});

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

function clearButtons() {
  imageButtons.forEach((button) => {
    button.firstElementChild.classList.remove("image-fade-clicked");
  });
}

function lbclearButtons() {
  imageButtonsLB.forEach((button) => {
    button.firstElementChild.classList.remove("image-fade-clicked");
  });
}

function activeButton() {
  let id = "";
  imageButtons.forEach((button) => {
    console.log(button.firstElementChild);
    if (button.firstElementChild.classList.contains("image-fade-clicked")) {
      id = button.firstElementChild.id;
    }
  });
  return id;
}

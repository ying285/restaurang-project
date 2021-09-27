"use strict";
const searchBtn = document.querySelector(".buttonSearch");
const closeBtn = document.querySelector(".closeButton");
const locationCloseBtn = document.querySelector(".locationCloseButton");
const menuCloseBtn = document.querySelector(".menuCloseButton");
const mySearchPag = document.querySelector(".searchPag");
const myOverlay = document.querySelector(".overlay");
const myLocation = document.querySelector(".locationPage");
const locationBtn = document.querySelector(".locationButton");
const nemuBtn = document.querySelector(".nemuButton");
const menu = document.querySelector(".menu");

//search page
const searchPage = () => {
  const openOverlay = () => {
    mySearchPag.classList.remove("hidden");
    myOverlay.classList.remove("hidden");
  };

  const closeOverlay = () => {
    mySearchPag.classList.add("hidden");
    myOverlay.classList.add("hidden");
  };

  searchBtn.addEventListener("click", openOverlay);
  closeBtn.addEventListener("click", closeOverlay);
};
searchPage();

//location page
const locationPage = () => {
  const openLocation = () => {
    myLocation.classList.remove("hidden");
    myOverlay.classList.remove("hidden");
  };

  const closeLocation = () => {
    myLocation.classList.add("hidden");
    myOverlay.classList.add("hidden");
  };

  locationBtn.addEventListener("click", openLocation);
  locationCloseBtn.addEventListener("click", closeLocation);
};

locationPage();

//menu page

const menuPage = () => {
  const openLocation = () => {
    menu.classList.remove("hidden");
    myOverlay.classList.remove("hidden");
  };

  const closeLocation = () => {
    menu.classList.add("hidden");
    myOverlay.classList.add("hidden");
  };

  nemuBtn.addEventListener("click", openLocation);
  menuCloseBtn.addEventListener("click", closeLocation);
};

menuPage();

//swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

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

  // Responsive breakpoints
  breakpoints: {
    // Default parameters

    678: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

//form
const form = document.querySelector("#form");
const order = document.querySelector("#exampleFormControlInput2");
const phone = document.querySelector("#exampleFormControlInput3");
const address = document.querySelector("#exampleFormControlInput6");
const email = document.querySelector("#exampleFormControlInput7");
const btn = document.querySelector(".formBtn");

//function add or remove class name

const formValidation = () => {
  const setError = (input, message) => {
    const inputGroup = input.parentElement;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
    const error = inputGroup.querySelector("small");
    error.innerText = message;
  };

  const setSuccess = (input) => {
    const inputGroup = input.parentElement;
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");
  };

  //validate functions for each input

  const validateOrder = (input) => {
    if (input.value.trim() === "") {
      setError(input, "Invalid order");
      return false;
    } else if (input.value.trim().length < 2) {
      setError(input, "Please enter at least 2 characters");
      return false;
    } else {
      setSuccess(input);
      return true;
    }
  };

  const validatePhone = (input) => {
    if (input.value.trim() === "") {
      setError(input, "Phone Number can't be empty");
      return false;
    } else if (input.value.trim().length < 10) {
      setError(input, "At least 10 numbers");
      return false;
    } else {
      setSuccess(input);
      return true;
    }
  };

  const validateAddress = (input) => {
    let regEx = /[A-z]{6}(\s)*[0-9]{1,3}$/;
    if (input.value.trim() === "") {
      setError(input, "Address can't be empty");
      return false;
    } else if (!regEx.test(input.value)) {
      setError(input, "At least 6 characters and 1 number");
      return false;
    } else {
      setSuccess(input);
      return true;
    }
  };

  const validateEmail = (input) => {
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (input.value.trim() === "") {
      setError(input, "Email address can't be empty");
      return false;
    } else if (!regEx.test(input.value)) {
      setError(input, "Email address is not valid");
      return false;
    } else {
      setSuccess(input);
      return true;
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateOrder(order);
    validatePhone(phone);
    validateAddress(address);
    validateEmail(email);
  });

  order.addEventListener("blur", () => {
    validateAddress(order);
  });

  phone.addEventListener("blur", () => {
    validateAddress(phone);
  });

  address.addEventListener("blur", () => {
    validateAddress(address);
  });

  email.addEventListener("blur", () => {
    validateAddress(email);
  });
};

formValidation();

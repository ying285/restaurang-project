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

//shopping chart

const shoppingChart = document.querySelector(".shoppingButton");
const buttons = document.querySelectorAll(".chartBtn");
const chartIcon = document.querySelector(".chart-icon");
const bookDishes = document.querySelector(".bookDishes");
const chartOpenButton = document.querySelector(".shoppingButton");
const chartCloseButton = document.querySelector(".chartCloseButton");
const chartContainer = document.querySelector(".chart-container");

let dishes = [
  {
    name: "steak",
    tag: "image 1",
    price: 15.99,
    order: 0,
  },
  {
    name: "grilled salmon",
    tag: "image 2",
    price: 17.99,
    order: 0,
  },
  {
    name: "salmon salad",
    tag: "image 3",
    price: 12.99,
    order: 0,
  },
  {
    name: "chiken rice",
    tag: "image 5",
    price: 14.99,
    order: 0,
  },
  {
    name: "grilled seabass",
    tag: "image 6",
    price: 16.99,
    order: 0,
  },
  {
    name: "sandwich",
    tag: "image 7",
    price: 8.99,
    order: 0,
  },
  {
    name: "roasted beef",
    tag: "image 8",
    price: 20.99,
    order: 0,
  },
  {
    name: "spring rolls",
    tag: "image 9",
    price: 6.99,
    order: 0,
  },
  {
    name: "hamburger",
    tag: "image11",
    price: 7.99,
    order: 0,
  },
  {
    name: "hot pizza",
    tag: "image12",
    price: 16.99,
    order: 0,
  },
];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    chartIcon.classList.add("remove-hidden");
    btnItems(dishes[i]);
    sumPrice(dishes[i]);
  });
}

const onLoadDishItems = () => {
  let dishItems = localStorage.getItem("btnItems");
  dishItems && (chartIcon.textContent = dishItems);
};

const btnItems = (dish) => {
  let dishItems = localStorage.getItem("btnItems");
  dishItems = +dishItems;

  if (dishItems) {
    localStorage.setItem("btnItems", dishItems + 1);
    chartIcon.textContent = dishItems + 1;
  } else {
    localStorage.setItem("btnItems", 1);
    chartIcon.textContent = 1;
  }

  myDishs(dish);
};

const myDishs = (dish) => {
  let dishTags = localStorage.getItem("dishOrders");
  dishTags = JSON.parse(dishTags);

  if (dishTags !== null) {
    dishTags[dish.tag] === undefined &&
      (dishTags = {
        ...dishTags,
        [dish.tag]: dish,
      });
    dishTags[dish.tag].order += 1;
  } else {
    dish.order = 1;
    dishTags = {
      [dish.tag]: dish,
    };
  }

  localStorage.setItem("dishOrders", JSON.stringify(dishTags));
};

const sumPrice = (dish) => {
  //console.log(dish.price);
  let orderPrice = localStorage.getItem("sumPrice");

  if (orderPrice !== null) {
    orderPrice = +orderPrice;
    localStorage.setItem("sumPrice", orderPrice + dish.price);
  } else {
    localStorage.setItem("sumPrice", dish.price);
  }
};

const display = () => {
  let orderItems = localStorage.getItem("dishOrders");
  orderItems = JSON.parse(orderItems);
  let orderPrice = localStorage.getItem("sumPrice");
  if (orderItems) {
    Object.values(orderItems).map((item) => {
      const html = `<div class='myItems'>
             <div class='myItem_title'>
             <i class="fas me-2 chartIcon1 fa-minus-circle"></i>
             <img class='me-2' src="img/${item.tag}.png">
             <span>${item.name}</span>
             </div>
            
             <div class='myItem_price'>$${item.price}</div>
             <div class='myItem_quantity'>
             <i class="fas fa-angle-left"></i><span>${
               item.order
             }</span><i class="fas fa-angle-right"></i>
             </div>
               <div class='myItem_total'>
               $${item.order * item.price}
               </div>
             </div>
           `;
      bookDishes.insertAdjacentHTML("beforeend", html);
    });

    const basketTotal = `
    <div class='basketContainer'>
 <h4 class='basketTitle'>BASKET TOTAL</h4>
 <h4 class='basketTotal'>${orderPrice}</h4>
</div>`;

    bookDishes.insertAdjacentHTML("afterend", basketTotal);
  }
};
onLoadDishItems();
display();

//open and close shopping chart page page
const shoppingChartPage = () => {
  const openShoppingChart = () => {
    chartContainer.classList.remove("hidden");
    myOverlay.classList.remove("hidden");
  };

  const closeShoppingChart = () => {
    chartContainer.classList.add("hidden");
    myOverlay.classList.add("hidden");
  };

  chartOpenButton.addEventListener("click", openShoppingChart);
  chartCloseButton.addEventListener("click", closeShoppingChart);
};

shoppingChartPage();

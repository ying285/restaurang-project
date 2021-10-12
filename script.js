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
const basketTotal = document.querySelector(".basketTotal");

// data would be used in this feature(as same as data on UI)
let dishes = [
  {
    name: "Steak",
    tag: "image 1",
    price: 15.99,
    order: 0,
  },
  {
    name: "Grilled salmon",
    tag: "image 2",
    price: 17.99,
    order: 0,
  },
  {
    name: "Salmon salad",
    tag: "image 3",
    price: 12.99,
    order: 0,
  },
  {
    name: "Chiken rice",
    tag: "image 5",
    price: 14.99,
    order: 0,
  },
  {
    name: "Grilled seabass",
    tag: "image 6",
    price: 16.99,
    order: 0,
  },
  {
    name: "Sandwich",
    tag: "image 7",
    price: 8.99,
    order: 0,
  },
  {
    name: "Roasted beef",
    tag: "image 8",
    price: 20.99,
    order: 0,
  },
  {
    name: "Spring rolls",
    tag: "image 9",
    price: 6.99,
    order: 0,
  },
  {
    name: "Hamburger",
    tag: "image11",
    price: 7.99,
    order: 0,
  },
  {
    name: "Hot pizza",
    tag: "image12",
    price: 16.99,
    order: 0,
  },
];
// loop btn when user clicked
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    // remove hidden class so that show up red counting icon
    //chartIcon.classList.add("remove-hidden");
    //call btnItems and transfer dishes's data into btnItems function
    btnItems(dishes[i]);
    //call btnItems and transfer dishes's data into sum price function
    sumPrice(dishes[i]);
  });
}

//show the red counting icon on the shopping chart icon
const onLoadDishItems = () => {
  let dishItems = localStorage.getItem("btnItems");
  dishItems && (chartIcon.textContent = dishItems);
};

//count and stora total dish quantity in localstorage and show them on UI(red couting icon)
const btnItems = (dish) => {
  let dishItems = localStorage.getItem("btnItems");
  dishItems = +dishItems;

  if (dishItems) {
    //add a data to extied one in localstorage
    localStorage.setItem("btnItems", dishItems + 1);
    //show on UI(red counting icon)
    chartIcon.textContent = dishItems + 1;
  } else {
    //add a data
    localStorage.setItem("btnItems", 1);
    //show on UI(red counting icon)
    chartIcon.textContent = 1;
  }
  //call function myDish and pass selected data to it
  myDishs(dish);
};

//distinguish and show different item which passed from function 'btnItems'
const myDishs = (dish) => {
  // declare a varible dishTags which get value of 'dishOrders' from localStorage
  let dishTags = localStorage.getItem("dishOrders");
  //translate json data to js data
  dishTags = JSON.parse(dishTags);

  //if data in localstrage is not empty
  if (dishTags !== null) {
    //if add a dishTags which is different than previous one(show a underfined) so dishTags euqal previous items plus current one.
    dishTags[dish.tag] === undefined &&
      (dishTags = {
        //previous items
        ...dishTags,
        //different item(new item)
        [dish.tag]: dish,
      });
    // if data in localstrage is not empty, quantity of item plus 1
    dishTags[dish.tag].order += 1;
  } else {
    //if data in localstrage is empty, quantity of item equal 1, and add dishTags to localStorage as a obj
    dish.order = 1;

    dishTags = {
      [dish.tag]: dish,
    };
  }
  // set up a data called dishOrders, its value is dishTags and translate the value to json form
  localStorage.setItem("dishOrders", JSON.stringify(dishTags));
};

// function for counting sumPrice
const sumPrice = (dish) => {
  //console.log(dish.price);
  //get value of 'sumPrice' from localStorage
  let orderPrice = localStorage.getItem("sumPrice");
  //if there are already data there, orderprice(value of sumprice) plus singal dish's price
  if (orderPrice !== null) {
    // translate string to number
    orderPrice = +orderPrice;

    localStorage.setItem("sumPrice", orderPrice + dish.price);
    //if no data there add passed data's price as sum price.
  } else {
    localStorage.setItem("sumPrice", dish.price);
  }
};

//display data to UI
const display = () => {
  let total = 0;
  bookDishes.innerHTML = "";
  //assign value of dishOrders in localStorage to varivable 'orderItems'
  let orderItems = localStorage.getItem("dishOrders");
  // translate json data into js data
  orderItems = JSON.parse(orderItems);
  //assign value of sumPrice in localStorage to varivable 'orderPrice'
  let orderPrice = localStorage.getItem("sumPrice");
  if (orderItems) {
    //object.value() is to geting value of object 'orderItems', then add each object's value to html elements
    Object.values(orderItems).map((item) => {
      total += Number(item.order) * Number(item.price);
      const html = `<div class='myItems'>
             <div class='myItem_title'>
             <a onclick="removeItems('${item.tag}')">
             <i class="fas me-2 chartIcon1 fa-minus-circle"></i>
             </a>
             <img class='me-2' src="img/${item.tag}.png">
             <span>${item.name}</span>
             </div>
            
             <div class='myItem_price'>$${item.price}</div>
             <div class='myItem_quantity'>
             <a onclick="minsItem('${
               item.tag
             }')"><i class="fas fa-minus-circle me-1" style='color: #e7e3e3; font-size: .8rem' ></i></a><span>${
        item.order
      }</span><a  onclick="addItem('${
        item.tag
      }')"><i class="fas fa-plus-circle ms-1" style='color: #e7e3e3;  font-size: .8rem' ></i></a>
             </div>
               <div class='myItem_total'>
               $${item.order * item.price}
               </div>
             </div>
           `;
      bookDishes.insertAdjacentHTML("beforeend", html);
    });
    basketTotal.textContent = total.toFixed(2);

    // add basketTotal item to the end
    //     const basketTotal = `
    //     <div class='basketContainer'>
    //  <h4 class='basketTitle'>BASKET TOTAL</h4>
    //  <h4 class='basketTotal'>$${Number(orderPrice).toFixed(2)}</h4>
    // </div>`;

    //     bookDishes.insertAdjacentHTML("afterend", basketTotal);
  }
};

//minsItem-left
const minsItem = (id) => {
  let orderPrice = localStorage.getItem("sumPrice");

  let orderItems = localStorage.getItem("dishOrders");
  // translate json data into js data
  orderItems = JSON.parse(orderItems);

  let dishItems = localStorage.getItem("btnItems");
  dishItems = +dishItems;

  if (orderItems !== null) orderItems[id].order -= 1;

  if (orderItems[id].order < 0) return;

  localStorage.setItem("dishOrders", JSON.stringify(orderItems));

  // if (orderPrice !== null) {
  //   orderPrice -= orderItems[id].price;
  //   if (orderPrice < 1) {
  //     localStorage.setItem("btnItems", 1);
  //     return;
  //   }
  // localStorage.setItem("sumPrice", orderPrice);
  //}
  if (chartIcon.textContent > 1) {
    chartIcon.textContent = dishItems - 1;
  }
  if (dishItems > 0) localStorage.setItem("btnItems", dishItems - 1);
  //if (dishItems < 0) return;

  display();
};

//addItem-right

const addItem = (id) => {
  let dishItems = localStorage.getItem("btnItems");
  dishItems = +dishItems;

  let orderPrice = localStorage.getItem("sumPrice");
  orderPrice = +orderPrice;

  let orderItems = localStorage.getItem("dishOrders");
  //translate json data into js data
  orderItems = JSON.parse(orderItems);

  if (orderItems) {
    orderItems[id].order += 1;
    localStorage.setItem("dishOrders", JSON.stringify(orderItems));
    orderPrice += orderItems[id].price;
    localStorage.setItem("sumPrice", orderPrice);
  }

  //add a data to extied one in localstorage
  localStorage.setItem("btnItems", dishItems + 1);
  //show on UI(red counting icon)
  chartIcon.textContent = dishItems + 1;

  display();
};

//remove items from overlay
const removeItems = (id) => {
  let orderPrice = localStorage.getItem("sumPrice");

  let dishItems = localStorage.getItem("btnItems");
  dishItems = +dishItems;

  let orderItems = localStorage.getItem("dishOrders");
  // translate json data into js data
  orderItems = JSON.parse(orderItems);

  console.log(typeof orderItems[id].order);
  console.log(typeof dishItems);

  chartIcon.textContent = dishItems - orderItems[id].order;

  localStorage.setItem("btnItems", dishItems - orderItems[id].order);

  if (orderPrice !== null) {
    orderPrice -= orderItems[id].price;
  }
  localStorage.setItem("sumPrice", orderPrice);

  //delete items
  delete orderItems[id];
  localStorage.setItem("dishOrders", JSON.stringify(orderItems));

  //count down number on red counting icon
  //changeIcon();
  display();
};

onLoadDishItems();
display();

//open and close shopping chart page page
const shoppingChartPage = () => {
  const openShoppingChart = () => {
    display();
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

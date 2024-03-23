// import { products } from "./product.js";

const nav = document.querySelector(".navigations");
const menu = document.querySelector(".menu");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const darkMode = document.querySelector(".mode");

let state = 1;
menu.addEventListener("click",()=>{
  nav.classList.toggle("activeMenu");
  if(state == 1){
    menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    state = 0;
  }else{
    menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    state = 1;
  }
})

let mode = "light";
darkMode.addEventListener("click", ()=>{
  if(mode === "light"){
    darkMode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    document.body.classList.toggle("dark-mode");
    mode = "dark";
  }else{
    darkMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    document.body.classList.toggle("dark-mode");
    mode = "light";
  }
})

// Card display funcions


let homeProducts = document.querySelector("#new-products");
function getData(){
  
  products.forEach(item => {
    let check = item.image;
    if(check !== ""){
      homeProducts.innerHTML += `
          <div class="card">
            <div class="favorite-btn">
              <i class="fa-regular fa-heart"></i>
            </div>
            <a href="details.html" onclick="showDetails(${item.id})" class="image">
              <img src=${item.image} alt="">
            </a>
            <div class="details">
              <h2>${item.nameItem}</h2>
              <span class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>
              <div class="price-cart">
                <span class="price">$${item.price}</span>
                <button class="add-to-cart" onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-plus"></i></button>
              </div>
            </div>
          </div>`;
    }
  })


}
if(homeProducts){
  getData();
}

// Details function

let ids = localStorage.getItem("newId");;
function showDetails(id){
  localStorage.setItem("newId", id);
  console.log(id)
}

let detailsContainer = document.querySelector(".product-details");


function showDetails(){
  products.forEach(item => {
    if(ids == item.id){
      detailsContainer.innerHTML = `
        <div class="details-container">
          <div class="details-top">
            <a href="details.html" class="details-image">
              <img src=${item.image} alt="">
            </a>
          </div>
          <div class="bottom">
            <div class="name-price">
              <div class="name">
                <span>Name</span>
                <h2>${item.title}</h2>
                <span>${item.catagory}</span>
              </div>
              <div class="price">
                <span class="price">$${item.price}</span>
              </div>
            </div>
            <div class="des-div">
              <span>Descriptions</span>
              <p>${item.description}</p>
            </div>
          </div>
          <div class="cart-box">
            <div class="heart"><i class="fa-regular fa-heart"></i></div>
            <button class="big-cart-btn">Add to Cart</button>
          </div>
      </div>`;
    }
  })
}

if(detailsContainer){
  showDetails();
  console.log(ids)
}


// cart function

// let cartNum = document.querySelector(".cart-num");
// let cartItems = [];
// let cartCount = 0;
// function addToCart(itemId){
//   products.forEach(item =>{
//     if(item.id == itemId){
//       let demo =JSON.parse(localStorage.getItem('cart')) || [];
//       demo.push(item);
//       localStorage.setItem('cart', JSON.stringify(demo));
//       cartItems.push(item);
//       cartCount++;
//       localStorage.setItem("cartCount", cartCount);
//       cartNum.innerHTML = localStorage.getItem("cartCount");
//       }
//     })
//   }


// let cartPages = document.querySelector(".items-list");

// function cartPage(){
//   let demo =JSON.parse(localStorage.getItem('cart')) || [];
//   let card = "";
//   demo.forEach(item =>{
//     card += `<div class="items-cart">
//     <div class="image-cart">
//       <img src=${item.image} alt="">
//     </div>
//     <div class="name">
//       <span>${item.name}</span>
//     </div>
//     <div class="quantity">
//       <button class="decrase">-</button>
//       <span>0</span>
//       <button class="incrase">+</button>
//     </div>
//     <button onclick="removeItem()" class="remove-item">Remove</button>
//   </div>`;
  
//   })
//   cartPages.innerHTML = card;
// }

// if(cartPages){
//   console.log(JSON.parse(localStorage.getItem('cart')))
//   cartPage();
// }
// let cartArray = localStorage.getItem("cartArr");

// console.log(typeof(cartArray))








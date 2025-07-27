getMenu()
  .then(() => takeOrder())
  .then(() => orderPrep())
  .then(() => payOrder())
  .then((res) => {
    if (res.paid) thankyouFnc();
  })
  .catch((error) => {
    console.error(error);
  });

// Fetch and display menu
async function getMenu() {
  try {
    const response = await fetch('food.json');
    const data = await response.json();
    displayItem(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Render items to DOM
function displayItem(data) {
  const box = document.querySelector('.menu-item');
  box.innerHTML = '';
  data.forEach((element) => {
    box.innerHTML += `
      <div class="card">
        <img src="${element.imgSrc}" alt="" class="card-img" />
        <div class="card-content">
          <div class="card-text">
            <p class="item-name">${element.name}</p>
            <p class="item-price">$${element.price}/-</p>
          </div>
          <button class="add-card-btn">+</button>
        </div>
      </div>
    `;
  });
}

//  takeOrder
function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const burgers = [
        'Cheeseburger',
        'Chicken Burger',
        'Veggie Burger',
        'Fish Burger',
        'Double Patty Burger'
      ];
      // pick 3 random burgers
      const order = {
        items: burgers.sort(() => 0.5 - Math.random()).slice(0, 3)
      };
      console.log('Order taken:', order);
      resolve(order);
    }, 2500);
  });
}

// orderPrep
function orderPrep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const status = { order_status: true, paid: false };
      console.log('Order Prepared:', status);
      resolve(status);
    }, 1500);
  });
}

// payOrder
function payOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const status = { order_status: true, paid: true };
      console.log('Payment Done:', status);
      resolve(status);
    }, 1000);
  });
}

//  Thank You Function
function thankyouFnc() {
  alert('Tthankyou for eating with us today!');
}

function secondScreen(){
  let manucon=document.querySelector("#menu-contener")
  let hideMainImg = document.querySelector(".hero-img");
  hideMainImg.style.display='none';
  manucon.style.marginTop = "80px";

};

// hamburger option 

let close=document.querySelector(".hamburger-close")
let open=document.querySelector("#hamburger-open")
let sidebar=document.querySelector(".side-bar")

open.addEventListener('click',()=>{
  sidebar.style.display="block"
  close.style.display='block'
})
close.addEventListener('click',()=>{
  sidebar.style.display='none'
  close.style.display='none'

})
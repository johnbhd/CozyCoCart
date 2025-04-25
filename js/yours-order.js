import { Products } from "./allProduct.js";

const products = Products();

const loggedUser = JSON.parse(localStorage.getItem('loggedUsers'));
const userOrder = JSON.parse(localStorage.getItem('userOrder')) || [];
const ewalletBalace = document.getElementById('wallet-balance');
const orderDiv = document.querySelector('.orderUser');
const users = JSON.parse(localStorage.getItem('users'));

let findUser = users.find(user => user.userId === loggedUser.userId);

orderDiv.innerHTML = '';
const tabs = document.querySelectorAll('.status-tab');

const widthdraw = document.getElementById('withdraw-amount');
const addmoney = document.getElementById('addmoney');
const addFundsBut = document.getElementById('addFunds');
let addBalance = 0;
let UpdateMoney = 0;
let notifi = [];

function addFunds() {
  UpdateMoney = parseInt(findUser.money + addBalance);
  console.log(UpdateMoney);
  findUser.money = UpdateMoney;
  alert(`Success! You have withdrawn ₱${addBalance}. new Balance: ₱${UpdateMoney}`);
  localStorage.setItem('users', JSON.stringify(users));

  const noti = JSON.parse(localStorage.getItem('Notifications')) || [];

  if (Array.isArray(noti)) {
    notifi = noti; 
  }

  notifi.push({
      message: `✅ Transaction Complete! Old Balance: ₱${findUser.money}, Withdrawn: ₱${addBalance}, New Balance: ₱${UpdateMoney}`,
      timestamp: new Date().toString(),
      user: findUser.userId
  });
  localStorage.setItem('Notifications', JSON.stringify(notifi));

  location.reload();
}

widthdraw.addEventListener('input', () => {

  addmoney.textContent = widthdraw.value;
  addBalance = parseInt(widthdraw.value);
});

addFundsBut.addEventListener('click', addFunds);
widthdraw.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    addFunds();
  }
});

console.log(findUser.money);


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const selectedStatus = tab.getAttribute('data-status');
    displayOrders(selectedStatus);
  });
});
displayOrders("All"); 
function displayOrders(statusFilter = "All") {
  orderDiv.innerHTML = ""; // clear previous content

  if (loggedUser && loggedUser.userId) {
    const currentUserId = loggedUser.userId;

    const userSpecificOrders = userOrder.filter(order => order.orderId === currentUserId);

    const filteredOrders = statusFilter === "All"
      ? userSpecificOrders
      : userSpecificOrders.filter(order => order.status === statusFilter);

    if (filteredOrders.length === 0) {
      orderDiv.innerHTML = `<div class="order-box"><p>No orders under "${statusFilter}".</p></div>`;
    } else {
      filteredOrders.forEach(order => {
        const matchedProduct = products.find(product => product.name === order.nameOrder);

        if (matchedProduct) {
          const mergedOrder = { ...order, ...matchedProduct };
          const selectedColor = mergedOrder.colors?.find(c => c.code === order.colorOrder)?.name || "N/A";
          const matchedImages = mergedOrder.colors
            .filter(c => c.name === selectedColor)
            .map(c => c.img);
          let deliveryMessage = "";
          const currentDate = new Date();
          const day = currentDate.getDate();
          const month = currentDate.toLocaleString('default', { month: 'short' });
          const year = currentDate.getFullYear();
          
          const formattedDate = `${month} ${day}, ${year}`;
          
          if (mergedOrder.status === "📦 Delivered") {
            deliveryMessage = `<b>${formattedDate} Delivered</b>  <br>Your package has been delivered.`;
          } else if (mergedOrder.status === "🛒 Order Placed") {
            deliveryMessage = `<b>Order Placed</b><br>Your order has been successfully placed and is being processed.`;
          } else if (mergedOrder.status === "⚙️ Processing") {
            deliveryMessage = `<b>Processing</b><br>Your order is being prepared and will be shipped soon.`;
          } else if (mergedOrder.status === "🚚 Shipped") {
            deliveryMessage = `<b>Shipped</b><br>Your package has been shipped and is on its way.`;
          } else if (mergedOrder.status === "🚚 In Transit") {
            deliveryMessage = `<b>In Transit</b><br>Your package is currently in transit.`;
          } else {
            deliveryMessage = `<b>Status Unknown</b><br>The status of your package is unknown.`;
          }
          
          
  
          orderDiv.innerHTML += `
            <div class="order-box">
              <div class="order-header">
                <span class="order-status">${mergedOrder.status} (${mergedOrder.paymentMethod})</span>
              </div><br>
              <div class="delivery-info">
                <div class="status-icon"></div>
                <div class="delivery-text">
                 ${deliveryMessage}
                </div>
              </div>
              <div class="product-item">
                <div class="field-product">
                  <img src="${matchedImages}" class="product-thumb" alt="${mergedOrder.name}">
                  <p><b>Product Name:</b><br> ${mergedOrder.name}</p>
                  <p><b>Product Description:</b><br> ${mergedOrder.description}</p>
                  <p><b>Color:</b> ${selectedColor}</p>
                  <p><b>Size:</b> ${mergedOrder.sizeOrder || "N/A"}</p>
                  <div class="buynow">
                    <div class="order-total">
                      Total: ₱${mergedOrder.totalPrice} 
                      <span style="font-size: 0.85em;">(₱${mergedOrder.price} x ${mergedOrder.quantityOrder})</span>
                    </div>
                    <a href="product-info.html?name=${encodeURIComponent(mergedOrder.name)}" class="btn-buy-again">Buy again</a>
                  </div>
                </div>
              </div>
            </div>
          `;
        }
      });
    }
  } else {
    orderDiv.innerHTML = `<div class="order-box"><p>Please log in to view your orders.</p></div>`;
  }
}


// add to cart
const cartItems = JSON.parse(localStorage.getItem('AddtoCart')) || [];

const cartContainer = document.querySelector('.cart-product');
cartContainer.innerHTML = '';

if (loggedUser && loggedUser.userId) {
  const currentUserId = loggedUser.userId;
  const userCartItems = cartItems.filter(item => item.orderId === currentUserId);

  if (userCartItems.length === 0) {
    cartContainer.innerHTML = `<div class="order-box"><p>Your cart is empty.</p></div>`;
  } else {
    userCartItems.forEach((item, index) => {
      const matchedProduct = products.find(product => product.name === item.name);

      if (matchedProduct) {
        const mergedCart = {
          ...item,
          ...matchedProduct
        };
        const matchedImages = [];
        const selectedColor = mergedCart.colors?.find(c => c.code === item.color)?.name || "N/A";
        const findImg = mergedCart.colors.find(colorimg => selectedColor === colorimg.name);
        mergedCart.colors.forEach(colorimg => {
          if (colorimg.name === selectedColor) {
            matchedImages.push(colorimg.img); // Or whatever field contains the image
          }
        });

        cartContainer.innerHTML += `
          <div class="cart-info">
            <div class="checkimg">
  
              <img src="${matchedImages}" class="product-thumb" alt="${mergedCart.name}">
            </div>
            
            <p><b>Product Name:</b><br> ${mergedCart.name}</p>
            <p><b>Color:</b> ${selectedColor || "N/A"}</p>
            <p><b>Size:</b> ${mergedCart.size || "N/A"}</p>
            <p><b>Quantity:</b> ${mergedCart.selectQuantity}</p>
            <div class = "butcart">
              <a href="#" class="btn-cart buy-now-delete" data-name="${mergedCart.name}">Delete</a>
              <a href="#" class="btn-cart buy-now-btn" data-name="${mergedCart.name}">Checkout</a>
            </div>
            </div>
        `;
      }
    });
  }
} else {
  cartContainer.innerHTML = `<div class="order-box"><p>Please log in to view your cart.</p></div>`;
}

document.addEventListener('click', function(e) {
  if (e.target && e.target.classList.contains('buy-now-btn')) {
    e.preventDefault();

    const clickedProductName = e.target.getAttribute('data-name');
    const currentUserId = JSON.parse(localStorage.getItem('currentUserId')) || [];

    const cartItems = JSON.parse(localStorage.getItem('AddtoCart')) || [];
    const userCartItems = cartItems.filter(item => item.orderId === currentUserId);

    const selectedItem = userCartItems.find(item => item.name === clickedProductName);

    if (selectedItem) {
      localStorage.setItem('selectedProduct', JSON.stringify(selectedItem));
      window.location.href = `basket-page.html?name=${encodeURIComponent(clickedProductName)}`;
    }
  }
  if (e.target && e.target.classList.contains('buy-now-delete')) {
    e.preventDefault();

    const productNameToDelete = e.target.getAttribute('data-name');
    const currentUserId = JSON.parse(localStorage.getItem('currentUserId')) || [];

    let cartItems = JSON.parse(localStorage.getItem('AddtoCart')) || [];

    // Remove item that matches both product name and user ID
    const updatedCartItems = cartItems.filter(item =>
      !(item.orderId === currentUserId && item.name === productNameToDelete)
    );

    // Save updated cart
    localStorage.setItem('AddtoCart', JSON.stringify(updatedCartItems));

    // Reload page to reflect changes (or remove element from DOM)
    location.reload();
  }
});


// e wallet
ewalletBalace.textContent = `₱ ${findUser.money}`;


// PROFILE
function updateUserData() {
  const fullName = document.getElementById('fullname');
  const contactInput = document.getElementById('contact');
  const addressInput = document.getElementById('address');
  const userForm = document.getElementById('userForm');

  if (findUser.fullName) fullName.value = findUser.fullName;
  if (findUser.contact) contactInput.value = findUser.contact;
  if (findUser.address) addressInput.value = findUser.address;

  userForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const fullNameValue = fullName.value;
      const contactValue = contactInput.value;
      const addressValue = addressInput.value;

      findUser.fullName = fullNameValue;
      findUser.contact = contactValue;
      findUser.address = addressValue;

      localStorage.setItem('users', JSON.stringify(users));

      alert('User data updated successfully!');
  });
}


updateUserData();



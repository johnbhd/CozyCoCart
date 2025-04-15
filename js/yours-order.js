import { Products } from "./allProduct.js";

const products = Products();

const loggedUser = JSON.parse(localStorage.getItem('loggedUsers'));
const userOrder = JSON.parse(localStorage.getItem('userOrder')) || [];
const ewalletBalace = document.getElementById('wallet-balance');
const orderDiv = document.querySelector('.orderUser');
const users = JSON.parse(localStorage.getItem('users'));
let findUser = users.find(user => user.userId === loggedUser.userId);
orderDiv.innerHTML = '';

// Make sure we have a logged-in user
if (loggedUser && loggedUser.userId) {
  const currentUserId = loggedUser.userId;

  // Filter orders for this user
  const userSpecificOrders = userOrder.filter(order => order.orderId === currentUserId);

  if (userSpecificOrders.length === 0) {
    orderDiv.innerHTML = `<div class="order-box"><p>You have no orders yet.</p></div>`;
  } else {
    userSpecificOrders.forEach(order => {
      const matchedProduct = products.find(product => product.name === order.nameOrder);

      if (matchedProduct) {
        const mergedOrder = {
          ...order,
          ...matchedProduct,
        };
        const selectedColor = mergedOrder.colors?.find(c => c.code === order.colorOrder)?.name || "N/A";

        orderDiv.innerHTML += `
          <div class="order-box">
            <div class="order-header">
              <span class="order-status">Order completed</span>
            </div><br>
            <div class="delivery-info">
              <div class="status-icon"></div>
              <div class="delivery-text">
                <strong>Jan 18 Delivered</strong><br>
                Your package has been delivered.
              </div>
            </div>
            <div class="product-item">
              <div class="field-product">
                <img src="${mergedOrder.img}" class="product-thumb" alt="${mergedOrder.name}">
                <p><b>Product Name:</b><br> ${mergedOrder.name}</p>
                <p><b>Product Description:</b><br> ${mergedOrder.description}</p>
                <p><b>Color:</b> ${selectedColor || "N/A"}</p>
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
        const selectedColor = mergedCart.colors?.find(c => c.code === item.color)?.name || "N/A";

        cartContainer.innerHTML += `
          <div class="cart-info">
            <div class="checkimg">
  
              <img src="${mergedCart.img}" class="product-thumb" alt="${mergedCart.name}">
            </div>
            
            <p><b>Product Name:</b><br> ${mergedCart.name}</p>
            <p><b>Product Description:</b><br> ${mergedCart.description}</p>
            <p><b>Color:</b> ${selectedColor || "N/A"}</p>
            <p><b>Size:</b> ${mergedCart.size || "N/A"}</p>
            <p><b>Quantity:</b> ${mergedCart.selectQuantity}</p>
            <a href="#" class="btn-cart buy-now-btn" data-name="${mergedCart.name}">Checkout</a>
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
});


// e wallet
ewalletBalace.textContent = `₱ ${findUser.money}`;




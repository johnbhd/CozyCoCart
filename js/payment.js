import { Products } from "./allProduct.js";


const products = Products();
const params = new URLSearchParams(window.location.search);
const productName = params.get('name');
console.log(productName);
const productFind = products.find(product => product.name === productName);

const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
const sessionId = JSON.parse(localStorage.getItem('currentUserId'));
const users = JSON.parse(localStorage.getItem('users')) || [];
let findUser = users.find(user => user.userId === sessionId);
const orderUser = users.find(user => user.userId === selectedProduct.orderId);

const findImg = productFind.colors.find(colorimg => colorimg.code === selectedProduct.color);
console.log(findImg);

let deliveryFee = 35;
let Quantity = selectedProduct.selectQuantity;
let Price = productFind.price;
let totalPrice = Price * Quantity + deliveryFee;

const DeliveryForm = document.getElementById('DeliveryForm');

// product show basket page and product info
function ProductShow() {
    const imgMain = document.getElementById('ProductImgMain');
    const ProductNameInfo = document.getElementById('ProductNameInfo');
    const ProductRating = document.getElementById('ProductRating');
    const ProductSold = document.getElementById('ProductSold');
    const arrival = document.getElementById('Arrival');
    const now = new Date();
    const options = { month: 'long', day: 'numeric' };
    
    const formattedDate = now.toLocaleDateString('en-US', options);
    
    now.setDate(now.getDate() + 3);
    const newDate = now.toLocaleDateString('en-US', options);

    console.log(selectedProduct);


    if (productFind) {
        imgMain.innerHTML = `<img src="${findImg.img}" alt="${productFind.name}">`;
        ProductNameInfo.textContent = productFind.name;
        ProductRating.textContent = `${productFind.rating} stars`;
        ProductSold.textContent = `${productFind.sold} sold`;
        arrival.innerHTML = `<b>Expected Arrival:</b> ${formattedDate} - ${newDate}</p>`;

        ColorsFunc(selectedProduct.color);
        SizesOption(selectedProduct.size);

    } else {
        imgMain.textContent = `<p>Product not found.</p>`;
    }

}
// colors choices
function ColorsFunc(colorsval) {

    const colorCon = document.querySelector('.colors');
    
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color-option');
    colorDiv.style.backgroundColor = colorsval;
    colorCon.appendChild(colorDiv);
    
}

function SizesOption(sizes) {
    const sizeCon = document.querySelector('.size');
    const sizebut = document.createElement('button');
    sizebut.innerHTML = sizes;
    sizeCon.appendChild(sizebut);

}

// Increase Quantity
function Increase() {
    const qty = document.getElementById('qty');
    let currentQty = parseInt(qty.value);
    qty.value = currentQty + 1;
    Quantity = currentQty + 1;
    updatePaymentSummary(); 
}

// Decrease Quantity
function Decrease() {
    const qty = document.getElementById('qty');
    let currentQty = parseInt(qty.value);
    if (currentQty > 1) {
        qty.value = currentQty - 1;
        Quantity = currentQty - 1;
        updatePaymentSummary();
    }
}

// Event listener for manual input of quantity
document.getElementById('qty').addEventListener('input', (e) => {
    let value = parseInt(e.target.value);
    Quantity = isNaN(value) || value < 1 ? 1 : value;
    updatePaymentSummary(); 
});

// Initialize quantity and display payment summary
document.getElementById('qty').value = Quantity;
updatePaymentSummary(); 


function updatePaymentSummary() {
    totalPrice = (Price * Quantity) + deliveryFee; 
    PaymentSummary(Price); 
}
// pric summary
function PaymentSummary(price) {
    const paymentCon = document.querySelector('.payment-summary');
    paymentCon.innerHTML = `
        <div class="row-payment">
            <p>Product Price</p>
            <p>₱ ${price}</p>
        </div>
        <div class="row-payment">
            <p>Quantity</p>
            <p>${Quantity}</p>
        </div>
        <div class="row-payment">
            <p>Delivery Fee</p>
            <p>₱ ${deliveryFee}</p>
        </div>
        <br>
        <hr>
        <div class="row-payment">
            <p><b>Total Amount</b></p>
            <p><b>₱ ${totalPrice}</b></p>
        </div>
    `;
}
// Delivery and Payment 
document.addEventListener('DOMContentLoaded', function() {
    const fullName = document.getElementById('fullnameAdds');
    const contactInput = document.getElementById('numAdds');
    const addressInput = document.getElementById('addressAdds');


    if (findUser) {
        if (fullName) fullName.value = findUser.fullName || "";
        if (contactInput) contactInput.value = findUser.contact || "";
        if (addressInput) addressInput.value = findUser.address || "";
    }


    if (fullName) {
        fullName.addEventListener('input', () => {
            if (findUser) {
                findUser.fullName = fullName.value;
                updateUserStorage();
            }
        });
    }

    if (contactInput) {
        contactInput.addEventListener('input', () => {
            if (findUser) {
                findUser.contact = contactInput.value;
                updateUserStorage();
            }
        });
    }

    if (addressInput) {
        addressInput.addEventListener('input', () => {
            if (findUser) {
                findUser.address = addressInput.value;
                updateUserStorage();
            }
        });
    }


    function updateUserStorage() {
        localStorage.setItem('users', JSON.stringify(users));
    }
});
function UserInfo(e) {
    e.preventDefault();

    const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
    
    if (!paymentMethod) {
        alert("Please select a payment method.");
        return;
    }
    const method = paymentMethod.value;
    const fullName = document.getElementById('fullnameAdds').value;
    const contact = document.getElementById('numAdds').value;
    const address = document.getElementById('addressAdds').value;
    if (method === "e-Wallet") { 
        Gcashing(fullName, contact, address);
    } else {
        PlaceOrder(fullName, contact, address);
        alert("Order placed successfully!");
    }
}

function PaymentMethod() {
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked');
    if (selectedMethod) {
        const value = selectedMethod.value;
     
        if (value === "e-Wallet") {
            return value;
        }

        return value; 
    } else {
        return null; 
    }    
}

function Gcashing(fullName, contact, address) {
    const GcashingIntro = document.querySelector('.GcashingIntro');
    const GcashingMain = document.querySelector('.GcashingMain');
    const wallet = document.getElementById('ewallet');
    const butgcashing = document.getElementById('gcashbut');
    const amount = document.querySelectorAll('.Amount');
    const usernum = document.getElementById('usernum');

    usernum.textContent = findUser.contact

    butgcashing.textContent = `Send Php ${totalPrice}`;
    wallet.textContent = `₱ ${findUser.money}`;
    
    amount.forEach(amounts => {
        amounts.textContent = `₱ ${totalPrice}`;
    });

    function GcashingPayment() {
        GcashingMain.style.display = 'block';
        GcashingIntro.style.display = 'none';

        if (findUser.money < totalPrice) {
            alert('Insufficient balance');
            location.reload();
            return;
        }
        if (findUser) {
    
            butgcashing.addEventListener('click', () => {
            let paymetDeduc = findUser.money - totalPrice;
            findUser.money = paymetDeduc;
            console.log(findUser.money)
            localStorage.setItem('users', JSON.stringify(users));
                alert("Order placed successfully!");
                PlaceOrder(fullName, contact, address);
            });
        } else {
            alert('Error occurred...');
        }
    }

    butgcashing.addEventListener('click', () => {
        GcashingPayment(); 
    });

    setTimeout(() => {
        GcashingPayment(); 
    }, 2000);

    const modal = document.getElementById('simpleModal');
    const xmark = document.querySelector('.xmark');
    xmark.addEventListener('click', () => {
        modal.style.display = 'none';
        location.reload();
    });

    modal.style.display = 'flex';
}
document.querySelectorAll('.option-payment-choice').forEach(choice => {
    choice.addEventListener('click', () => {
      const radio = choice.querySelector('input[type="radio"]');
      radio.checked = true;
    });
  });

  
// Place Order
function PlaceOrder(fullName, contact, address) {
    const paymentMethod = PaymentMethod();

    if (!paymentMethod) return;
    
    if (findUser) {
        findUser.fullName = fullName;
        findUser.contact = contact;
        findUser.address = address;

        localStorage.setItem('users', JSON.stringify(users));
    }

    let userOrder = [];
    let notifi = [];

    try {
        const storedOrders = JSON.parse(localStorage.getItem('userOrder')) || [];
        if (Array.isArray(storedOrders)) {
            userOrder = storedOrders; 
        }

        const storedNotifications = JSON.parse(localStorage.getItem('Notifications')) || [];
        if (Array.isArray(storedNotifications)) {
            notifi = storedNotifications; 
        }
    } catch (e) {
        console.warn(e);
    }
    
    userOrder.push({
        nameOrder: selectedProduct.name,
        colorOrder: selectedProduct.color,
        sizeOrder: selectedProduct.size,
        quantityOrder: Quantity,
        totalPrice: totalPrice, 
        paymentMethod: paymentMethod,
        status: "🛒 Order Placed",
        orderId: selectedProduct.orderId,
        fullName: fullName,
        contact: contact,
        address: address,
    });
    notifi.push({
        message: `✅ Your order for ${selectedProduct.name} was successfully placed using ${paymentMethod}! Thank you! 🎉`,
        timestamp: new Date().toString(),
        user: findUser.userId
    });

    const cartItems = JSON.parse(localStorage.getItem('AddtoCart')) || [];
    const updatedCart = cartItems.filter(
        item => !(item.orderId === selectedProduct.orderId && item.name === selectedProduct.name)
    );

    localStorage.setItem('AddtoCart', JSON.stringify(updatedCart));
    localStorage.setItem('userOrder', JSON.stringify(userOrder));
    localStorage.setItem('Notifications', JSON.stringify(notifi));

    window.location.href = `./received-items.html`;
    localStorage.removeItem('selectedProduct');
    
}

DeliveryForm.addEventListener('submit', UserInfo);
document.getElementById('qty-increase').addEventListener('click', Increase);
document.getElementById('qty-decrease').addEventListener('click', Decrease);
ProductShow();
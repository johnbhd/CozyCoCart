import { Products } from "./allProduct.js";


const products = Products();
const params = new URLSearchParams(window.location.search);
const productName = params.get('name');
console.log(productName);
const productFind = products.find(product => product.name === productName);

const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
const sessionId = JSON.parse(localStorage.getItem('currentUserId'));
const users = JSON.parse(localStorage.getItem('users'));
let findUser = users.find(user => user.userId === sessionId);

let deliveryFee = 35;
let Quantity = selectedProduct.selectQuantity;
let Price = productFind.price ;
let totalPrice = Price * Quantity + deliveryFee;

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
        imgMain.innerHTML = `<img src="${productFind.img}" alt="${productFind.name}">`;
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

function UserInfo() {
    
}
document.getElementById('place-order').addEventListener('click', () => {
    const paymentMethod = PaymentMethod(); 

    if (paymentMethod === "Gcashing e-Wallet") {
        Gcashing(paymentMethod);
    } else if (!paymentMethod) {
        alert("Please select a payment method.");
    } else {
     
        PlaceOrder();
    }
});

function PaymentMethod() {
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked');
    if (selectedMethod) {
        const value = selectedMethod.value;

     
        if (value === "Gcashing e-Wallet") {
            return value;
        }

        return value; 
    } else {
        return null; 
    }    
}

function Gcashing(value) {
    const GcashingIntro = document.querySelector('.GcashingIntro');
    const GcashingMain = document.querySelector('.GcashingMain');
    const wallet = document.getElementById('ewallet');
    const butgcashing = document.getElementById('gcashbut');
    const amount = document.querySelectorAll('.Amount');

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
    
                PlaceOrder();
            });
        } else {
            alert('Error occurred...');
        }
    }

    butgcashing.addEventListener('click', () => {
        GcashingPayment(); // Directly call GcashingPayment when the button is clicked
    });

    setTimeout(() => {
        GcashingPayment(); // Automatically trigger payment after 2 seconds (if needed)
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
function PlaceOrder() {
    const paymentMethod = PaymentMethod();

    if (!paymentMethod) return;

    let userOrder = [];
    
    try {
        const storedOrders = JSON.parse(localStorage.getItem('userOrder')) || [];
        if (Array.isArray(storedOrders)) {
            userOrder = storedOrders; 
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
        status: "Pending",
        orderId: selectedProduct.orderId,
    });

    const cartItems = JSON.parse(localStorage.getItem('AddtoCart')) || [];
    const updatedCart = cartItems.filter(
        item => !(item.orderId === selectedProduct.orderId && item.name === selectedProduct.name)
    );

    localStorage.setItem('AddtoCart', JSON.stringify(updatedCart));
    localStorage.setItem('userOrder', JSON.stringify(userOrder));

    window.location.href = `./received-items.html`;
    localStorage.removeItem('selectedProduct');
    
}

document.getElementById('qty-increase').addEventListener('click', Increase);
document.getElementById('qty-decrease').addEventListener('click', Decrease);
ProductShow();
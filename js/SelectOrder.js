import { Products } from "./allProduct.js";

const products = Products();
const params = new URLSearchParams(window.location.search);
const productName = params.get('name');
console.log(productName);
const productFind = products.find(product => product.name ===productName);

let selectedColor = productFind && productFind.colors && productFind.colors[0]; // Default to the first color
let selectedSize = productFind && productFind.sizes && productFind.sizes[0];
let selectedQuantity = 1;


// product show basket page and product info
function ProductShow() {
    const imgMain = document.getElementById('ProductImgMain');
    const ProductNameInfo = document.getElementById('ProductNameInfo');
    const ProductRating = document.getElementById('ProductRating');
    const ProductSold = document.getElementById('ProductSold');
    const pricy = document.getElementById('pricy');
    const pricyy = document.getElementById('pricyy');
    const soldy = document.getElementById('soldy');
    const descrip = document.getElementById('descrip');
    
    if (productFind) {
        imgMain.innerHTML = `<img src="${productFind.img}" alt="${productFind.name}">`;
        ProductNameInfo.textContent = productFind.name;
        ProductRating.textContent = `${productFind.rating} stars`;
        ProductSold.textContent = `${productFind.sold} sold`;
        pricy.textContent = `₱ ${productFind.price}`;
        pricyy.textContent = productFind.rating;
        soldy.textContent = productFind.sold;
        descrip.textContent = productFind.description;

        ColorsFunc(productFind.colors);

        SizesOption(productFind.sizes);
    } else {
        imgMain.textContent = `<p>Product not found.</p>`;
    }
}
// colors choices
function ColorsFunc(colorsval) {
    
    const colorCon = document.querySelector('.colors');
    colorCon.innerHTML = '';
    
    const colorCodes = colorsval.map(color => color.code); // This gives you an array of color codes
    colorCodes.forEach((color, index) => {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color-option');
        colorDiv.style.backgroundColor = color;

        if (index === 0) {
            colorDiv.classList.add('selected');
            selectedColor = color;
        }

        colorDiv.addEventListener('click', () => selectColor(colorDiv, color));
        colorCon.appendChild(colorDiv);
    });
}
function selectColor(colorDiv, color) { 
    const colorOption = document.querySelectorAll('.color-option');
    colorOption.forEach(option => option.classList.remove('selected'));

    colorDiv.classList.add('selected');
    selectedColor = color;
}
// sizes
function SizesOption(sizes) {
    const sizeCon = document.querySelector('.size');
    sizeCon.innerHTML = '';

    sizes.forEach((size, index) => {
        const sizebut = document.createElement('button');
        sizebut.classList.add('sizeBut');
        sizebut.innerHTML = size;

        if (index === 0) {
            sizebut.classList.add('selected');
            selectedSize = size;
        }

        sizebut.addEventListener('click', () => SizesSelect(sizebut, size));
        sizeCon.appendChild(sizebut);
    });
    
}

function SizesSelect(sizebut, size) {
    const sizeOption = document.querySelectorAll('button');
    sizeOption.forEach(sizes => sizes.classList.remove('selected'));

    sizebut.classList.add('selected');
    selectedSize = size;
}
// Quantity Product
function Increase() {
    const qty = document.getElementById('qty');
    let currentQty = parseInt(qty.value);
    qty.value = currentQty + 1;
    selectedQuantity = currentQty + 1;
}

function Decrease() {
    const qty = document.getElementById('qty');
    let currentQty = parseInt(qty.value);
    if (currentQty > 1) {
        qty.value = currentQty - 1;
        selectedQuantity = currentQty - 1;
    }
}
document.getElementById('qty').addEventListener('input', (e) => {
    let value = parseInt(e.target.value);
    selectedQuantity = isNaN(value) || value < 1 ? 1 : value;
});

// Buy Now
function BuyNow() {
    const currentUserId = JSON.parse(localStorage.getItem('currentUserId')) || [];

    localStorage.setItem('selectedProduct', JSON.stringify({
        name: productFind.name,
        color: selectedColor,
        size: selectedSize,
        selectQuantity: selectedQuantity,
        orderId: currentUserId
    }));
    window.location.href = `basket-page.html?name=${encodeURIComponent(productFind.name)}`;
    
}
console.log(selectedQuantity);
console.log(selectedColor);
console.log(selectedSize);

function AddtoCart() {
    const currentUserId = JSON.parse(localStorage.getItem('currentUserId')) || [];

    let AddtoCart = [];

    try {
        const storedOrders = JSON.parse(localStorage.getItem('AddtoCart')) || [];
        if (Array.isArray(storedOrders)) {
            AddtoCart = storedOrders; 
        }
    } catch (e) {
        console.warn(e);
    }
    
    AddtoCart.push({
        name: productFind.name,
        color: selectedColor,
        size: selectedSize,
        selectQuantity: selectedQuantity,
        orderId: currentUserId
    });
    localStorage.setItem('AddtoCart', JSON.stringify(AddtoCart));

    window.location.href = `./received-items.html?page=cart`;
    localStorage.removeItem('selectedProduct');
}


document.getElementById('qty-increase').addEventListener('click', Increase);
document.getElementById('qty-decrease').addEventListener('click', Decrease);
document.getElementById('buy-now').addEventListener('click', BuyNow);
document.getElementById('add-cart').addEventListener('click', AddtoCart);
ProductShow();

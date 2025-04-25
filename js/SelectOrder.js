import { Products } from "./allProduct.js";

const products = Products();
const params = new URLSearchParams(window.location.search);
const productName = params.get('name');
console.log(productName);
const productFind = products.find(product => product.name ===productName);

let selectedColor = productFind && productFind.colors && productFind.colors[0]; // Default to the first color
let selectedSize = productFind && productFind.sizes && productFind.sizes[0];
let selectedQuantity = 1;

const AllProduct = document.getElementById("AllProduct");

// ratings product 
function RatingProd(rating) {
    const generateRatings = (avg, total) => {
        let base = [0, 0, 0, 0, 0];
        if (avg >= 4.5) base = [3, 2, 5, 30, 60];
        else if (avg >= 4) base = [4, 6, 10, 30, 50];
        else if (avg >= 3) base = [10, 15, 30, 30, 15];
        else if (avg >= 2) base = [20, 30, 30, 15, 5];
        else base = [60, 20, 10, 5, 5];
        return base.map(percent => Math.round((percent / 100) * total));
    };
    
    const totalRatings = Math.floor(Math.random() * 500 + 500); // 500–1000
    const starCounts = generateRatings(rating, totalRatings);
    
    // Display average rating
    document.getElementById('avg-rating').innerHTML = `${rating.toFixed(1)}<span>/5</span>`;
    document.getElementById('total-ratings').textContent = `${totalRatings} Ratings`;
    
    // Display star icons
    const starsEl = document.getElementById('star-display');
    const fullStars = '★'.repeat(Math.floor(rating));
    const emptyStars = '☆'.repeat(5 - Math.floor(rating));
    starsEl.textContent = fullStars + emptyStars;
    
    // Create rating bars
    const barsContainer = document.getElementById('bars-container');
    barsContainer.innerHTML = '';
    
    for (let i = 5; i >= 1; i--) {
        const count = starCounts[i - 1];
        const percent = (count / totalRatings) * 100;
    
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.innerHTML = `
        <span class="bar-label">${i} ★</span>
        <div class="bar-bg">
            <div class="bar-fill" style="width: ${percent}%"></div>
        </div>
        <span class="bar-count">${count}</span>
        `;
        barsContainer.appendChild(bar);
    }
    console.log("Passed rating to RatingProd:", rating);

}
// product show basket page and product info
function ProductShow() {
    const ProductNameInfo = document.getElementById('ProductNameInfo');
    const ProductRating = document.getElementById('ProductRating');
    const ProductSold = document.getElementById('ProductSold');
    const pricy = document.getElementById('pricy');
    const descrip = document.getElementById('descrip');
    
    if (productFind) {
        ProductNameInfo.textContent = productFind.name;
        ProductRating.textContent = `${productFind.rating} stars`;
        ProductSold.textContent = `${productFind.sold} sold`;
        pricy.textContent = `₱ ${productFind.price}`;
        descrip.textContent = productFind.description;
        descrip.textContent = productFind.description;
        
        prodChoicesImg(productFind.colors);
        ColorsFunc(productFind.colors);
        RatingProd(productFind.rating);
        SizesOption(productFind.sizes);
        Comments(productFind.comments); 
        
    } else {
        imgMain.textContent = `<p>Product not found.</p>`;
    }
}
// Comments 
function Comments(comment) { 
    const review = document.getElementById('review');
    comment.forEach(comments => {
        let randomDay = Math.floor(Math.random() * 30) + 1;
        review.innerHTML += `
        <div class="profile-icon">
                <i class="fas fa-user-circle"></i>
                <p>${comments.user}</p>
        </div>
        <div class="review-body">
            <div class="stars">★★★★★</div>
            <div class="review-text">
            <strong>${comments.comment}</strong>
            </div>
            <div class="review-meta">Color: Black &bull; ${randomDay} day ago</div>
        </div>
        `;
    });
    

}

function getStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += `<i class="fa-solid fa-star"></i>`;
        } else if (i - 0.5 === rating) {
            stars += `<i class="fa-solid fa-star-half-stroke"></i>`;
        } else {
            stars += `<i class="fa-regular fa-star"></i>`;
        }
    }
    return stars;
}

function ProductsGet(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    
    const productLink = document.createElement("a");
    productLink.href = `product-info.html?name=${encodeURIComponent(product.name)}`;
    productLink.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <p class="product-name">${product.name}</p>
    <p class="price">₱ ${product.price}</p>
    <p class="rating">
    ${getStars(product.rating)}
    (${product.sold} sold)
    </p>
    `;
    
    productCard.appendChild(productLink);
    return productCard;
}
const filterdCategory = products.filter(product => product.category === productFind.category);
filterdCategory.forEach(product => {
    const card = ProductsGet(product);
    AllProduct.appendChild(card);
});


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
    const selectedColorObj = productFind.colors.find(c => c.code === color);

    if (selectedColorObj) {
        const imgMain = document.getElementById('ProductImgMain');
        imgMain.src = selectedColorObj.img;
        imgMain.alt = selectedColorObj.name;

        // Update the thumbnail selection too
        const allImgs = document.querySelectorAll('.prod-img-choice');
        allImgs.forEach(imgEl => {
            imgEl.classList.remove('selected');
            if (imgEl.src.includes(selectedColorObj.img)) {
                imgEl.classList.add('selected');
            }
        });
    }
}
// choices product

function prodChoicesImg(choices) {
    const imgMain = document.getElementById('ProductImgMain');
    const prodimgChoice = document.getElementById('prodimgChoice');
    choices.forEach((imgs, index) => {
        const img = document.createElement('img');
        img.src = imgs.img;
        img.alt = imgs.name;
        img.classList.add('prod-img-choice');
        img.style.cursor = 'pointer';

        // Default selected
        if (index === 0) {
            img.classList.add('selected');
            imgMain.src = imgs.img; 
            imgMain.alt = imgs.name;
        }

        imgChange(img, imgs, imgMain);

        prodimgChoice.appendChild(img);
    });


}
function imgChange(img, imgs, imgMain) {
    img.addEventListener('click', () => {
        // Update selected image
        const allImgs = document.querySelectorAll('.prod-img-choice');
        allImgs.forEach(imgEl => imgEl.classList.remove('selected'));
        img.classList.add('selected');
        imgMain.src = imgs.img; 
        imgMain.alt = imgs.name;

        // Also update selected color
        const colorOptions = document.querySelectorAll('.color-option');
        colorOptions.forEach(option => option.classList.remove('selected'));

        const matchingColor = productFind.colors.find(color => color.img === imgs.img);
        if (matchingColor) {
            selectedColor = matchingColor.code;

            // Match the color by its background color
            colorOptions.forEach(option => {
                const style = window.getComputedStyle(option);
                if (style.backgroundColor === rgbFromHex(matchingColor.code)) {
                    option.classList.add('selected');
                }
            });
        }
    });
}
function rgbFromHex(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
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
    let notifi = [];

    try {
        const storedOrders = JSON.parse(localStorage.getItem('AddtoCart')) || [];
        if (Array.isArray(storedOrders)) {
            AddtoCart = storedOrders; 
        }

        const storedNotifications = JSON.parse(localStorage.getItem('Notifications')) || [];
        if (Array.isArray(storedNotifications)) {
            notifi = storedNotifications; 
        }
    } catch (e) {
        console.warn(e);
    }

    const newItems = {
        name: productFind.name,
        color: selectedColor,
        size: selectedSize,
        selectQuantity: selectedQuantity,
        orderId: currentUserId
    };
    
    const notiItem = {
        message: `🛒 ${newItems.name} has been added to your cart!`,
        timestamp: new Date().toString(),
        user: currentUserId
    };

    AddtoCart.push(newItems);
    notifi.push(notiItem);

    
    localStorage.setItem('AddtoCart', JSON.stringify(AddtoCart));
    localStorage.setItem('Notifications', JSON.stringify(notifi));
    
    window.location.href = `./received-items.html?page=cart`;
    localStorage.removeItem('selectedProduct');
}


document.getElementById('qty-increase').addEventListener('click', Increase);
document.getElementById('qty-decrease').addEventListener('click', Decrease);
document.getElementById('buy-now').addEventListener('click', BuyNow);
document.getElementById('add-cart').addEventListener('click', AddtoCart);
ProductShow();

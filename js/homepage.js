import { Products } from "./allProduct.js";

const products = Products();

const DailyView = products.sort(() => 0.5 - Math.random()).slice(0, 8);
const TopProduct = products.filter(product => product.rating >= 4.5).slice(0, 8);

const TopProductCon = document.getElementById("top-products");
const DailyViewCon = document.getElementById("daily-view");


if (!TopProductCon.hasChildNodes()) {
    TopProduct.forEach(product => {
        TopProductCon.appendChild(ProductsGet(product));
    });
}

if (!DailyViewCon.hasChildNodes()) {
    DailyView.forEach(product => {
        DailyViewCon.appendChild(ProductsGet(product));
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



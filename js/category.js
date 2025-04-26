// Category sort
import { Products } from "./allProduct.js";

const products = Products();
const params = new URLSearchParams(window.location.search);
const category = params.get('category');
const productName = params.get("product");

const filteredProducts = products.filter(product => product.category === category);
const productget = products.filter(p => p.name === productName);
const AllProduct = document.getElementById("AllProduct");


productget.forEach((product) => {
    AllProduct.appendChild(ProductsGet(product));
    });



const categoryHandle = {
    "all": () => {
        products.forEach((product) => {
            AllProduct.appendChild(ProductsGet(product));
        });   
    },
    "popular": () => {
        products.filter(product => product.rating === 5).
        forEach((product) => {
            AllProduct.appendChild(ProductsGet(product));
        });   
    },
    "topsales": () => {
        function parseSold(sold) {
            if (typeof sold === "string" && sold.includes('k')) {
                return parseFloat(sold) * 1000;
            }
            return Number(sold);
        }   
        
        products.filter(product => parseSold(product.sold) >= 10000).
        forEach((product) => {
            AllProduct.appendChild(ProductsGet(product));
        });   
    },
    "latest": () => {
        products.sort((a, b) => b.id - a.id).
        forEach((product) => {
            AllProduct.appendChild(ProductsGet(product));
        });         
    },
    "latest": () => {
        products.sort((a, b) => b.id - a.id).
        forEach((product) => {
            AllProduct.appendChild(ProductsGet(product));
            });         
    },
    "one": () => {
        products.filter(product => product.price >= 100 && product.price <= 500).
        forEach((product) => {
            AllProduct.appendChild(ProductsGet(product));
            });         
    },
    "five": () => {
        products.filter(product => product.price >= 500 && product.price <= 1000).
        forEach((product) => {
            AllProduct.appendChild(ProductsGet(product));
            });         
    },
    "thousand": () => {
        products.filter(product => product.price >= 1000).
        forEach((product) => {
            AllProduct.appendChild(ProductsGet(product));
            });         
    },
    "fiveStar": () => {
        products.filter(product => product.rating == 5).
        forEach((product) => {
            AllProduct.appendChild(ProductsGet(product));
            });         
    },
    "fourStar": () => {
        products.filter(product => product.rating == 4).
        forEach((product) => {
            AllProduct.appendChild(ProductsGet(product));
            });         
    },
    "ThreeBelow": () => {
        products.filter(product => product.rating <= 3).
        forEach((product) => {
            AllProduct.appendChild(ProductsGet(product));
            });         
    }
}

if (categoryHandle[category]) {
    categoryHandle[category]();
} 

// Category Show
filteredProducts.forEach((product) => {
  AllProduct.appendChild(ProductsGet(product));
});

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

    
        let colorsImg = product.colors;

        const productLink = document.createElement("a");
        productLink.href = `product-info.html?name=${encodeURIComponent(product.name)}`;
        productLink.innerHTML = `
            <img src="${colorsImg[0].img}" alt="${product.name}">
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



export function Products() {
    const products = [
        
        { 
            id: 1,
            img: "../img/cloth-men/hoodie.png",
            name: "Comfortable Hoodie",
            price: 450.00,
            rating: 4,
            sold: "15k",
            category: "men",
            description: "A cozy hoodie perfect for cold weather or casual outings.",
            sizes: ["S", "M", "L", "XL"],
            colors: [
                { name: "Grey", code: "grey", img: "../img/cloth-men/colors/hoodie-grey.png" },
                { name: "Black", code: "black", img: "../img/cloth-men/colors/hoodie-black.png" },
                { name: "Navy Blue", code: "navy-blue", img: "../img/cloth-men/colors/hoodie-navy-blue.png" }
            ],
            comments: [
                { user: "john", comment: "Very comfortable and soft material!", stars: 5 },
                { user: "louise", comment: "Great hoodie, but the size runs a bit big.", stars: 4 },
                { user: "camile", comment: "I love the fabric, but I wish it had more color options.", stars: 4 }
            ]
        },
        { 
            id: 2,
            img: "../img/cloth-men/joggers.png",
            name: "Relaxed-Fit Joggers",
            price: 380.00,
            rating: 2.5,
            sold: "18k",
            category: "men",
            description: "Comfortable joggers great for lounging or workouts.",
            sizes: ["M", "L", "XL"],
            colors: [
                { name: "Black", code: "black", img: "../img/cloth-men/colors/joggers-black.png" },
                { name: "Charcoal", code: "charcoal", img: "../img/cloth-men/colors/joggers-charcoal.png" },
                { name: "Olive", code: "olive", img: "../img/cloth-men/colors/joggers-olive.png" }
            ],
            comments: [
                { user: "jordan", comment: "Not bad, but could use better stitching.", stars: 2 },
                { user: "user", comment: "Fits well and feels nice!", stars: 3 },
                { user: "marco", comment: "Pretty good for the price.", stars: 3 }
            ]
        },
        { 
            id: 3,
            img: "../img/cloth-men/robe.png",
            name: "Comfortable Robe",
            price: 520.00,
            rating: 3,
            sold: "12k",
            category: "men",
            description: "Wrap yourself in this soft and absorbent robe after a long day.",
            sizes: ["M", "L", "XL"],
            colors: [
                { name: "White", code: "white", img: "../img/cloth-men/colors/robe-white.png" },
                { name: "Beige", code: "beige", img: "../img/cloth-men/colors/robe-beige.png" },
                { name: "Dark Grey", code: "dark-grey", img: "../img/cloth-men/colors/robe-dark-grey.png" }
            ],
            comments: [
                { user: "camile", comment: "Feels great after a shower!", stars: 4 },
                { user: "john", comment: "Material is decent but could be softer.", stars: 3 },
                { user: "jordan", comment: "A bit too short for my height.", stars: 2 }
            ]
        },
        { 
            id: 4,
            img: "../img/cloth-men/sweater.png",
            name: "Knit Sweater",
            price: 480.00,
            rating: 4.5,
            sold: "10k",
            category: "men",
            description: "Stylish knit sweater perfect for layering in chilly weather.",
            sizes: ["S", "M", "L"],
            colors: [
                { name: "Brown", code: "brown", img: "../img/cloth-men/colors/sweater-brown.png" },
                { name: "Navy", code: "navy", img: "../img/cloth-men/colors/sweater-navy.png" },
                { name: "Maroon", code: "maroon", img: "../img/cloth-men/colors/sweater-maroon.png" }
            ],
            comments: [
                { user: "louise", comment: "So soft and fits beautifully.", stars: 5 },
                { user: "user", comment: "Color is great, just wish sleeves were longer.", stars: 4 },
                { user: "john", comment: "Good quality and value for the price.", stars: 5 }
            ]
        },
        { 
            id: 5,
            img: "../img/cloth-men/tshirt.png",
            name: "Cotton T-Shirt",
            price: 350.00,
            rating: 3,
            sold: "22k",
            category: "men",
            description: "Classic cotton t-shirt, soft, breathable, and perfect for everyday wear.",
            sizes: ["S", "M", "L", "XL"],
            colors: [
                { name: "White", code: "white", img: "../img/cloth-men/colors/tshirt-white.png" },
                { name: "Black", code: "black", img: "../img/cloth-men/colors/tshirt-black.png" },
                { name: "Blue", code: "blue", img: "../img/cloth-men/colors/tshirt-blue.png" }
            ],
            comments: [
                { user: "camile", comment: "Nice feel, but fades after a few washes.", stars: 3 },
                { user: "marco", comment: "Simple and comfy, I wear it daily.", stars: 4 },
                { user: "jordan", comment: "Average quality for the price.", stars: 3 }
            ]
        },
        { 
            id: 6,
            img: "../img/cloth-men/jacket.png",
            name: "Comfortable Jacket",
            price: 550.00,
            rating: 2.5,
            sold: "14k",
            category: "men",
            description: "Lightweight jacket ideal for breezy evenings and casual wear.",
            sizes: ["M", "L", "XL"],
            colors: [
                { name: "Black", code: "black", img: "../img/cloth-men/colors/jacket-black.png" },
                { name: "Olive Green", code: "olive-green", img: "../img/cloth-men/colors/jacket-olive-green.png" },
                { name: "Khaki", code: "khaki", img: "../img/cloth-men/colors/jacket-khaki.png" }
            ],
            comments: [
                { user: "user", comment: "Looks nice but not very warm.", stars: 2 },
                { user: "john", comment: "Zipper broke after a week.", stars: 1 },
                { user: "louise", comment: "Decent for the price.", stars: 3 }
            ]
        },
         
        { 
            id: 7,
            img: "../img/cloth-women/cozy-robe.png",
            name: "Cozy Robe",
            price: 450.00,
            rating: 2.5,
            sold: "8.0k",
            category: "women",
            description: "Soft and cozy robe for those relaxing stay-at-home days.",
            sizes: ["S", "M", "L"],
            colors: [
                { name: "Pink", code: "pink", img: "../img/cloth-women/colors/robe-pink.png" },
                { name: "Lavender", code: "lavender", img: "../img/cloth-women/colors/robe-lavender.png" },
                { name: "White", code: "white", img: "../img/cloth-women/colors/robe-white.png" }
            ],
            comments: [
                { user: "camile", comment: "It’s okay, but the color wasn’t exactly as shown.", stars: 3 },
                { user: "marco", comment: "Comfortable but fabric feels thin.", stars: 2 },
                { user: "jordan", comment: "Good for short-term use.", stars: 2 }
            ]
        },
        { 
            id: 8,
            img: "../img/cloth-women/nightgown.png",
            name: "Nightgown",
            price: 390.00,
            rating: 2,
            sold: "6.0k",
            category: "women",
            description: "Light and breathable nightgown designed for comfort during sleep.",
            sizes: ["S", "M", "L"],
            colors: [
                { name: "Light Blue", code: "lightblue", img: "../img/cloth-women/colors/nightgown-lightblue.png" },
                { name: "Peach", code: "peachpuff", img: "../img/cloth-women/colors/nightgown-peach.png" },
                { name: "Cream", code: "#fffdd0", img: "../img/cloth-women/colors/nightgown-cream.png" }
            ],
            comments: [
                { user: "jordan", comment: "Too thin and not what I expected.", stars: 2 },
                { user: "camile", comment: "It’s cute but not as comfy as it looks.", stars: 2 },
                { user: "john", comment: "Gave as a gift, but the material felt cheap.", stars: 1 }
            ]
        },
        { 
            id: 9,
            img: "../img/cloth-women/blouse.png",
            name: "Blouse",
            price: 520.00,
            rating: 3.5,
            sold: "12.0k",
            category: "women",
            description: "Elegant blouse that works for both formal and casual wear.",
            sizes: ["S", "M", "L", "XL"],
            colors: [
                { name: "White", code: "white", img: "../img/cloth-women/colors/blouse-white.png" },
                { name: "Pastel Pink", code: "#ffd1dc", img: "../img/cloth-women/colors/blouse-pastel-pink.png" },
                { name: "Navy", code: "navy", img: "../img/cloth-women/colors/blouse-navy.png" }
            ],
            comments: [
                { user: "louise", comment: "Love the fit, perfect for work.", stars: 4 },
                { user: "user", comment: "Fabric wrinkles easily, but still pretty.", stars: 3 },
                { user: "camile", comment: "Stylish and comfy at the same time.", stars: 4 }
            ]
        },
        { 
            id: 10,
            img: "../img/cloth-women/relaxed-jeans.png",
            name: "Relaxed Jeans",
            price: 670.00,
            rating: 4.5,
            sold: "9.0k",
            category: "women",
            description: "Relaxed-fit jeans that give you comfort without sacrificing style.",
            sizes: ["M", "L", "XL"],
            colors: [
                { name: "Denim Blue", code: "#1f305e", img: "../img/cloth-women/colors/jeans-denim-blue.png" },
                { name: "Light Wash", code: "#add8e6", img: "../img/cloth-women/colors/jeans-light-wash.png" },
                { name: "Black", code: "black", img: "../img/cloth-women/colors/jeans-black.png" }
            ],
            comments: [
                { user: "marco", comment: "Best jeans I’ve owned in a while.", stars: 5 },
                { user: "john", comment: "Good quality and fits just right.", stars: 4 },
                { user: "jordan", comment: "Really comfy and looks great.", stars: 5 }
            ]
        },
        { 
            id: 11,
            img: "../img/cloth-women/cozy-knitwear.png",
            name: "Cozy Knitwear Sweater",
            price: 780.00,
            rating: 5,
            sold: "11.0k",
            category: "women",
            description: "Thick and warm knit sweater perfect for chilly days.",
            sizes: ["S", "M", "L"],
            colors: [
                { name: "Cream", code: "#fffdd0", img: "../img/cloth-women/colors/sweater-cream.png" },
                { name: "Brown", code: "brown", img: "../img/cloth-women/colors/sweater-brown.png" },
                { name: "Dusty Rose", code: "#d4a5a5", img: "../img/cloth-women/colors/sweater-dusty-rose.png" }
            ],
            comments: [
                { user: "camile", comment: "Super cozy and stylish!", stars: 5 },
                { user: "louise", comment: "I wear this all the time in cold weather.", stars: 5 },
                { user: "user", comment: "A little pricey but worth it.", stars: 5 }
            ]
        },
        { 
            id: 12,
            img: "../img/accessories/slippers.png",
            name: "Slippers",
            price: 250.00,
            rating: 4.5,
            sold: "7.5k",
            category: "accessories",
            description: "Soft, lightweight slippers perfect for indoor comfort.",
            sizes: ["36", "38", "40", "42"],
            colors: [
                { name: "Grey", code: "grey", img: "../img/accessories/colors/slippers-grey.png" },
                { name: "Pink", code: "pink", img: "../img/accessories/colors/slippers-pink.png" },
                { name: "Beige", code: "beige", img: "../img/accessories/colors/slippers-beige.png" }
            ],
            comments: [
                { user: "jordan", comment: "Super soft and cozy.", stars: 5 },
                { user: "marco", comment: "Love these for around the house.", stars: 4 },
                { user: "john", comment: "Comfortable but the sole wore out quickly.", stars: 4 }
            ]
        },
    
        { 
            id: 13,
            img: "../img/accessories/sneakers.png",
            name: "Sneakers",
            price: 950.00,
            rating: 5,
            sold: "10.0k",
            category: "accessories",
            description: "Trendy and durable sneakers great for daily use.",
            sizes: ["36", "38", "40", "42", "44"],
            colors: [
                { name: "White", code: "white", img: "../img/accessories/colors/sneakers-white.png" },
                { name: "Black", code: "black", img: "../img/accessories/colors/sneakers-black.png" },
                { name: "Navy Blue", code: "navy", img: "../img/accessories/colors/sneakers-navy.png" }
            ],
            comments: [
                { user: "camile", comment: "These are my go-to sneakers now.", stars: 5 },
                { user: "louise", comment: "Stylish and super comfortable!", stars: 5 },
                { user: "user", comment: "Perfect for walks and gym time.", stars: 5 }
            ]
        },
        { 
            id: 14,
            img: "../img/accessories/portable_fans.png",
            name: "Portable Fans",
            price: 350.00,
            rating: 4,
            sold: "5.3k",
            category: "accessories",
            description: "Compact and rechargeable fan for on-the-go cooling.",
            sizes: ["One Size"],
            colors: [
                { name: "White", code: "white", img: "../img/accessories/colors/fan-white.png" },
                { name: "Blue", code: "lightblue", img: "../img/accessories/colors/fan-blue.png" },
                { name: "Pink", code: "pink", img: "../img/accessories/colors/fan-pink.png" }
            ],
            comments: [
                { user: "john", comment: "Very handy in the summer!", stars: 4 },
                { user: "marco", comment: "Small but powerful enough.", stars: 4 },
                { user: "jordan", comment: "Battery life could be better.", stars: 3 }
            ]
        },
        { 
            id: 15,
            img: "../img/accessories/tech_ereaders.png",
            name: "Tech E-readers",
            price: 2500.00,
            rating: 4.5,
            sold: "3.1k",
            category: "accessories",
            description: "Lightweight e-reader with a crisp screen for reading on the go.",
            sizes: ["One Size"],
            colors: [
                { name: "Black", code: "black", img: "../img/accessories/colors/ereader-black.png" },
                { name: "Silver", code: "silver", img: "../img/accessories/colors/ereader-silver.png" }
            ],
            comments: [
                { user: "louise", comment: "Perfect for reading anywhere.", stars: 5 },
                { user: "camile", comment: "Great screen clarity and battery life.", stars: 5 },
                { user: "user", comment: "Took some time to get used to, but I love it now.", stars: 4 }
            ]
        },
        {
            id: 16,
            img: "../img/accessories/comfortable_bag_lightweight.png",
            name: "Comfortable Bag (Lightweight)",
            price: 450.00,
            rating: 4,
            sold: "4.8k",
            category: "accessories",
            description: "Lightweight and spacious bag perfect for daily use.",
            sizes: ["One Size"],
            colors: [
                { name: "Gray", code: "gray", img: "../img/accessories/colors/bag-gray.png" },
                { name: "Black", code: "black", img: "../img/accessories/colors/bag-black.png" }
            ],
            comments: [
                { user: "camile", comment: "Super comfy and stylish!", stars: 4 },
                { user: "john", comment: "Perfect for everyday carry.", stars: 4 },
                { user: "marco", comment: "Good quality for the price.", stars: 4 }
            ]
        },
        {
            id: 17,
            img: "../img/accessories/headband.png",
            name: "Headband",
            price: 150.00,
            rating: 4.5,
            sold: "8.0k",
            category: "accessories",
            description: "Comfortable headband for everyday wear and sports.",
            sizes: ["One Size"],
            colors: [
                { name: "Red", code: "red", img: "../img/accessories/colors/headband-red.png" },
                { name: "Blue", code: "blue", img: "../img/accessories/colors/headband-blue.png" },
                { name: "Black", code: "black", img: "../img/accessories/colors/headband-black.png" }
            ],
            comments: [
                { user: "user", comment: "Very soft and fits well.", stars: 5 },
                { user: "camile", comment: "Good grip, doesn’t slip.", stars: 4 },
                { user: "john", comment: "Nice colors and comfy to wear.", stars: 4 }
            ]
        },
    
    
        {
            id: 18,
            img: "../img/accessories/scarf.png",
            name: "Scarf",
            price: 200.00,
            rating: 4.5,
            sold: "6.2k",
            category: "accessories",
            description: "Soft and warm scarf for all seasons.",
            sizes: ["One Size"],
            colors: [
                { name: "Beige", code: "beige", img: "../img/accessories/colors/scarf-beige.png" },
                { name: "Black", code: "black", img: "../img/accessories/colors/scarf-black.png" },
                { name: "Navy", code: "navy", img: "../img/accessories/colors/scarf-navy.png" }
            ],
            comments: [
                { user: "camile", comment: "Feels great and looks stylish!", stars: 5 },
                { user: "john", comment: "Perfect for cold weather.", stars: 4 },
                { user: "marco", comment: "Nice quality and design.", stars: 5 }
            ]
        },
        {
            id: 19,
            img: "../img/dailysupplies/calm_scented_soap.png",
            name: "Calm-scented Soap",
            price: 120.00,
            rating: 4,
            sold: "9.2k",
            category: "dailysupplies",
            description: "Refreshing soap with a calming scent for everyday use.",
            sizes: ["One Size"],
            colors: [
                { name: "White", code: "white", img: "../img/dailysupplies/colors/soap-white.png" },
                { name: "Lavender", code: "lavender", img: "../img/dailysupplies/colors/soap-lavender.png" }
            ],
            comments: [
                { user: "user", comment: "Smells amazing and lasts long.", stars: 4 },
                { user: "camile", comment: "Love the soothing scent!", stars: 4 },
                { user: "john", comment: "Gentle on skin.", stars: 4 }
            ]
        },
        {
            id: 20,
            img: "../img/dailysupplies/soft_cloths.png",
            name: "Soft Cloths",
            price: 180.00,
            rating: 3,
            sold: "7.1k",
            category: "dailysupplies",
            description: "Durable and gentle cloths for cleaning or personal use.",
            sizes: ["One Size"],
            colors: [
                { name: "White", code: "white", img: "../img/dailysupplies/colors/cloths-white.png" },
                { name: "Gray", code: "gray", img: "../img/dailysupplies/colors/cloths-gray.png" },
                { name: "Pink", code: "pink", img: "../img/dailysupplies/colors/cloths-pink.png" }
            ],
            comments: [
                { user: "marco", comment: "Useful but wears quickly.", stars: 3 },
                { user: "user", comment: "Very soft but a bit thin.", stars: 3 },
                { user: "camile", comment: "Good enough for the price.", stars: 3 }
            ]
        },
        {
            id: 21,
            img: "../img/dailysupplies/natural_essential_oils.png",
            name: "Natural Essential Oils",
            price: 350.00,
            rating: 3.5,
            sold: "5.8k",
            category: "dailysupplies",
            description: "Natural oils for relaxation, massage, and aromatherapy.",
            sizes: ["One Size"],
            colors: [
                { name: "Amber Bottle", code: "amber", img: "../img/dailysupplies/colors/oils-amber.png" }
            ],
            comments: [
                { user: "john", comment: "Nice scent but fades quickly.", stars: 3 },
                { user: "marco", comment: "Very calming, I use it daily.", stars: 4 },
                { user: "user", comment: "Love the natural fragrance.", stars: 4 }
            ]
        }
        
    ];

    return products;
}

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
            description: "A cozy hoodie perfect for cold weather or casual outings. Crafted with soft fleece, it provides maximum warmth and comfort. Ideal for layering or wearing solo during the chilly season.",
            sizes: ["S", "M", "L", "XL"],
            colors: [
              { name: "Grey", code: "#808080", img: "../img/cloth-men/colors/hoodie-grey.png" },
              { name: "Black", code: "#000000", img: "../img/cloth-men/colors/hoodie-black.png" },
              { name: "Navy Blue", code: "#000080", img: "../img/cloth-men/colors/hoodie-navy-blue.png" }
            ],
            comments: [
              { user: "john", comment: "Very comfortable and soft material! I've been wearing it almost every day since I got it. Keeps me warm without overheating.", stars: 5 },
              { user: "louise", comment: "Great hoodie, but the size runs a bit big. I’d recommend sizing down if you want a snug fit. Still, the quality is excellent.", stars: 4 },
              { user: "camile", comment: "I love the fabric, but I wish it had more color options. It feels luxurious and thick. Definitely a go-to for casual wear.", stars: 4 },
              { user: "david", comment: "Perfect hoodie for lazy weekends. The material is top-notch and it hasn't shrunk after washing. Pairs well with joggers or jeans.", stars: 5 },
              { user: "emily", comment: "Color stayed vibrant even after multiple washes. It fits nicely and is super comfy. Great value for the price!", stars: 5 }
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
              description: "Comfortable joggers great for lounging or workouts. Made from breathable fabric, they allow ease of movement throughout the day. Their simple design makes them a versatile addition to your wardrobe.",
              sizes: ["M", "L", "XL"],
              colors: [
                { name: "Black", code: "#000000", img: "../img/cloth-men/colors/joggers-black.png" },
                { name: "Charcoal", code: "#36454F", img: "../img/cloth-men/colors/joggers-charcoal.png" },
                { name: "Olive", code: "#808000", img: "../img/cloth-men/colors/joggers-olive.png" }
              ],
              comments: [
                { user: "jordan", comment: "Not bad, but could use better stitching. They started fraying at the seams after a few wears. Otherwise, they’re pretty comfortable.", stars: 2 },
                { user: "user", comment: "Fits well and feels nice! I’ve worn them for both workouts and lounging and they’ve held up well. Could use a drawstring though.", stars: 3 },
                { user: "marco", comment: "Pretty good for the price. The fabric feels decent and it's lightweight. Great for casual wear or running errands.", stars: 3 },
                { user: "emma", comment: "Wish they had pockets! The fit is relaxed and comfy though. Fabric is gentle on the skin and breathable.", stars: 3 },
                { user: "samuel", comment: "Waistband stretches out a bit over time. Still, they’re my go-to joggers for lazy days. The color didn’t fade even after multiple washes.", stars: 2 }
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
            description: "Wrap yourself in this soft and absorbent robe after a long day. Designed for comfort and warmth, it’s ideal for use after showers or while lounging. The lightweight design adds to its appeal for everyday use.",
            sizes: ["M", "L", "XL"],
            colors: [
              { name: "White", code: "#FFFFFF", img: "../img/cloth-men/colors/robe-white.png" },
              { name: "Beige", code: "#F5F5DC", img: "../img/cloth-men/colors/robe-beige.png" },
              { name: "Dark Grey", code: "#A9A9A9", img: "../img/cloth-men/colors/robe-dark-grey.png" }
            ],
            comments: [
              { user: "camile", comment: "Feels great after a shower! The robe dries quickly and stays soft. A solid choice for post-bath relaxation.", stars: 4 },
              { user: "john", comment: "Material is decent but could be softer. It fits well though and is lightweight. I like the neutral colors too.", stars: 3 },
              { user: "jordan", comment: "A bit too short for my height. The fabric is nice but doesn’t feel premium. I use it mostly indoors at night.", stars: 2 },
              { user: "lucas", comment: "Great design but the fit could be improved. Works fine for casual use around the house. Not too thick, which is good for warmer seasons.", stars: 3 },
              { user: "rachel", comment: "Love the dark grey color. It's easy to clean and looks nice. Comfortable for daily use after showers.", stars: 4 }
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
            description: "Stylish knit sweater perfect for layering in chilly weather. It offers a snug fit while still allowing room for movement. The knit fabric adds texture and warmth for everyday looks.",
            sizes: ["S", "M", "L"],
            colors: [
              { name: "Brown", code: "#964B00", img: "../img/cloth-men/colors/sweater-brown.png" },
              { name: "Navy", code: "#000080", img: "../img/cloth-men/colors/sweater-navy.png" },
              { name: "Maroon", code: "#800000", img: "../img/cloth-men/colors/sweater-maroon.png" }
            ],
            comments: [
              { user: "louise", comment: "So soft and fits beautifully. The sleeves are slightly short, but overall it’s great. I’ve worn it to work and on casual days.", stars: 5 },
              { user: "user", comment: "Color is great, just wish sleeves were longer. Very cozy and warm. Looks great paired with jeans or chinos.", stars: 4 },
              { user: "john", comment: "Good quality and value for the price. It’s held up well after multiple washes. No pilling or loose threads so far.", stars: 5 },
              { user: "sophie", comment: "Nice slim fit and really stylish. I get compliments whenever I wear it. The navy color is rich and flattering.", stars: 5 },
              { user: "dylan", comment: "Warm and breathable. Stitching is solid and it feels premium. Ideal for fall or winter outings.", stars: 4 }
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
            description: "Classic cotton t-shirt, soft, breathable, and perfect for everyday wear. Built for comfort, it’s an essential staple in any casual wardrobe. Works well as a base layer or standalone top.",
            sizes: ["S", "M", "L", "XL"],
            colors: [
              { name: "White", code: "#FFFFFF", img: "../img/cloth-men/colors/tshirt-white.png" },
              { name: "Black", code: "#000000", img: "../img/cloth-men/colors/tshirt-black.png" },
              { name: "Blue", code: "#0000FF", img: "../img/cloth-men/colors/tshirt-blue.png" }
            ],
            comments: [
              { user: "camile", comment: "Nice feel, but fades after a few washes. It still holds its shape well. Great for casual use or workouts.", stars: 3 },
              { user: "marco", comment: "Simple and comfy, I wear it daily. Lightweight and breathable for summer. Easy to match with different outfits.", stars: 4 },
              { user: "jordan", comment: "Average quality for the price. The fit is okay, but I wish the neckline was tighter. Still wearable and practical.", stars: 3 },
              { user: "zara", comment: "Soft material that feels good on the skin. Would love more color options. The stitching is solid and hasn’t unraveled.", stars: 4 },
              { user: "ben", comment: "Decent shirt for daily wear. A little thin, but breathable. I usually pair it with a jacket when going out.", stars: 3 }
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
            description: "Lightweight jacket ideal for breezy evenings and casual wear. Features a minimalist design that pairs well with any outfit. Designed for layering during cooler days.",
            sizes: ["M", "L", "XL"],
            colors: [
              { name: "Black", code: "#000000", img: "../img/cloth-men/colors/jacket-black.png" },
              { name: "Olive Green", code: "#556B2F", img: "../img/cloth-men/colors/jacket-olive-green.png" },
              { name: "Khaki", code: "#F0E68C", img: "../img/cloth-men/colors/jacket-khaki.png" }
            ],
            comments: [
              { user: "user", comment: "Looks nice but not very warm.", stars: 2 },
              { user: "john", comment: "Zipper broke after a week.", stars: 1 },
              { user: "louise", comment: "Decent for the price.", stars: 3 },
              { user: "maria", comment: "The color looks better in person!", stars: 4 },
              { user: "daniel", comment: "Not great for winter but good for fall.", stars: 3 }
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
            description: "Soft and cozy robe for those relaxing stay-at-home days. It has a plush texture that provides warmth and comfort. Ideal for lounging or after a hot shower.",
            sizes: ["S", "M", "L"],
            colors: [
              { name: "Pink", code: "#FFC0CB", img: "../img/cloth-women/colors/robe-pink.png" },
              { name: "Lavender", code: "#E6E6FA", img: "../img/cloth-women/colors/robe-lavender.png" },
              { name: "White", code: "#FFFFFF", img: "../img/cloth-women/colors/robe-white.png" }
            ],
            comments: [
              { user: "camile", comment: "It’s okay, but the color wasn’t exactly as shown.", stars: 3 },
              { user: "marco", comment: "Comfortable but fabric feels thin.", stars: 2 },
              { user: "jordan", comment: "Good for short-term use.", stars: 2 },
              { user: "ally", comment: "Soft but sheds a bit after washing.", stars: 3 },
              { user: "nina", comment: "Love the pink shade—so relaxing!", stars: 4 }
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
            description: "Light and breathable nightgown designed for comfort during sleep. Made from soft cotton that feels smooth on the skin. Keeps you cool throughout the night.",
            sizes: ["S", "M", "L"],
            colors: [
              { name: "Light Blue", code: "#ADD8E6", img: "../img/cloth-women/colors/nightgown-lightblue.png" },
              { name: "Peach", code: "#FFDAB9", img: "../img/cloth-women/colors/nightgown-peach.png" },
              { name: "Cream", code: "#FFFDD0", img: "../img/cloth-women/colors/nightgown-cream.png" }
            ],
            comments: [
              { user: "jordan", comment: "Too thin and not what I expected.", stars: 2 },
              { user: "camile", comment: "It’s cute but not as comfy as it looks.", stars: 2 },
              { user: "john", comment: "Gave as a gift, but the material felt cheap.", stars: 1 },
              { user: "ruby", comment: "Nice pattern, but the fit is loose.", stars: 3 },
              { user: "mia", comment: "It’s airy and I love wearing it in summer.", stars: 4 }
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
            description: "Elegant blouse that works for both formal and casual wear. Features a flattering neckline and smooth fabric. Great choice for office days or dinner dates.",
            sizes: ["S", "M", "L", "XL"],
            colors: [
              { name: "White", code: "#FFFFFF", img: "../img/cloth-women/colors/blouse-white.png" },
              { name: "Pastel Pink", code: "#FFD1DC", img: "../img/cloth-women/colors/blouse-pastel-pink.png" },
              { name: "Navy", code: "#000080", img: "../img/cloth-women/colors/blouse-navy.png" }
            ],
            comments: [
              { user: "louise", comment: "Love the fit, perfect for work.", stars: 4 },
              { user: "user", comment: "Fabric wrinkles easily, but still pretty.", stars: 3 },
              { user: "camile", comment: "Stylish and comfy at the same time.", stars: 4 },
              { user: "grace", comment: "Would love more color options!", stars: 4 },
              { user: "ivy", comment: "Looks better tucked into jeans.", stars: 3 }
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
            description: "Relaxed-fit jeans that give you comfort without sacrificing style. Made from stretchable denim that moves with you. A reliable choice for everyday wear.",
            sizes: ["M", "L", "XL"],
            colors: [
              { name: "Denim Blue", code: "#1F305E", img: "../img/cloth-women/colors/jeans-denim-blue.png" },
              { name: "Light Wash", code: "#ADD8E6", img: "../img/cloth-women/colors/jeans-light-wash.png" },
              { name: "Black", code: "#000000", img: "../img/cloth-women/colors/jeans-black.png" }
            ],
            comments: [
              { user: "marco", comment: "Best jeans I’ve owned in a while.", stars: 5 },
              { user: "john", comment: "Good quality and fits just right.", stars: 4 },
              { user: "jordan", comment: "Really comfy and looks great.", stars: 5 },
              { user: "kate", comment: "Perfect length for me!", stars: 5 },
              { user: "ella", comment: "Love the stretch—it’s very forgiving.", stars: 4 }
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
            description: "Thick and warm knit sweater perfect for chilly days. Made with premium yarn for a soft, comfortable feel. A winter must-have for cozy style.",
            sizes: ["S", "M", "L"],
            colors: [
                { name: "Cream", code: "#fffdd0", img: "../img/cloth-women/colors/sweater-cream.png" },
                { name: "Brown", code: "#a52a2a", img: "../img/cloth-women/colors/sweater-brown.png" },
                { name: "Dusty Rose", code: "#d4a5a5", img: "../img/cloth-women/colors/sweater-dusty-rose.png" }
            ],
            comments: [
                { user: "camile", comment: "Super cozy and stylish!", stars: 5 },
                { user: "louise", comment: "I wear this all the time in cold weather.", stars: 5 },
                { user: "user", comment: "A little pricey but worth it.", stars: 5 },
                { user: "karen", comment: "The quality is top-notch, love the texture.", stars: 5 },
                { user: "mira", comment: "Exactly what I needed for chilly nights.", stars: 5 }
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
            description: "Soft, lightweight slippers perfect for indoor comfort. They provide just the right warmth for your feet. Ideal for lounging or relaxing at home.",
            sizes: ["36", "38", "40", "42"],
            colors: [
                { name: "Grey", code: "#808080", img: "../img/accessories/colors/slippers-grey.png" },
                { name: "Pink", code: "#ffc0cb", img: "../img/accessories/colors/slippers-pink.png" },
                { name: "Beige", code: "#f5f5dc", img: "../img/accessories/colors/slippers-beige.png" }
            ],
            comments: [
                { user: "jordan", comment: "Super soft and cozy.", stars: 5 },
                { user: "marco", comment: "Love these for around the house.", stars: 4 },
                { user: "john", comment: "Comfortable but the sole wore out quickly.", stars: 4 },
                { user: "lisa", comment: "Great value for the price.", stars: 5 },
                { user: "chloe", comment: "My feet feel pampered in these!", stars: 5 }
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
            description: "Trendy and durable sneakers great for daily use. Designed for both comfort and style on the go. Pairs well with almost any casual outfit.",
            sizes: ["36", "38", "40", "42", "44"],
            colors: [
                { name: "White", code: "#ffffff", img: "../img/accessories/colors/sneakers-white.png" },
                { name: "Black", code: "#000000", img: "../img/accessories/colors/sneakers-black.png" },
                { name: "Navy Blue", code: "#000080", img: "../img/accessories/colors/sneakers-navy.png" }
            ],
            comments: [
                { user: "camile", comment: "These are my go-to sneakers now.", stars: 5 },
                { user: "louise", comment: "Stylish and super comfortable!", stars: 5 },
                { user: "user", comment: "Perfect for walks and gym time.", stars: 5 },
                { user: "miguel", comment: "Very supportive soles.", stars: 5 },
                { user: "tina", comment: "Exactly what I was looking for!", stars: 5 }
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
            description: "Compact and rechargeable fan for on-the-go cooling. Easy to carry in your bag or pocket. A must-have during summer or travel.",
            sizes: ["One Size"],
            colors: [
                { name: "White", code: "#ffffff", img: "../img/accessories/colors/fan-white.png" },
                { name: "Blue", code: "#add8e6", img: "../img/accessories/colors/fan-blue.png" },
                { name: "Pink", code: "#ffc0cb", img: "../img/accessories/colors/fan-pink.png" }
            ],
            comments: [
                { user: "john", comment: "Very handy in the summer!", stars: 4 },
                { user: "marco", comment: "Small but powerful enough.", stars: 4 },
                { user: "jordan", comment: "Battery life could be better.", stars: 3 },
                { user: "trish", comment: "Helps me survive long commutes.", stars: 4 },
                { user: "ella", comment: "Quiet and effective.", stars: 4 }
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
            description: "Lightweight e-reader with a crisp screen for reading on the go. Supports multiple formats and has long battery life. Great for bookworms and students alike.",
            sizes: ["One Size"],
            colors: [
                { name: "Black", code: "#000000", img: "../img/accessories/colors/ereader-black.png" },
                { name: "Silver", code: "#c0c0c0", img: "../img/accessories/colors/ereader-silver.png" }
            ],
            comments: [
                { user: "louise", comment: "Perfect for reading anywhere.", stars: 5 },
                { user: "camile", comment: "Great screen clarity and battery life.", stars: 5 },
                { user: "user", comment: "Took some time to get used to, but I love it now.", stars: 4 },
                { user: "derek", comment: "Feels like reading a real book.", stars: 5 },
                { user: "ana", comment: "Very convenient for traveling.", stars: 5 }
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
            description: "Lightweight and spacious bag perfect for daily use. Made with durable materials that ensure long-term reliability. Ideal for students, commuters, or weekend getaways.",
            sizes: ["One Size"],
            colors: [
                { name: "Gray", code: "#808080", img: "../img/accessories/colors/bag-gray.png" },
                { name: "Black", code: "#000000", img: "../img/accessories/colors/bag-black.png" }
            ],
            comments: [
                { user: "camile", comment: "Super comfy and stylish!", stars: 4 },
                { user: "john", comment: "Perfect for everyday carry.", stars: 4 },
                { user: "marco", comment: "Good quality for the price.", stars: 4 },
                { user: "alyssa", comment: "Love the lightweight feel and space inside.", stars: 5 },
                { user: "kyle", comment: "Not bad, fits my daily stuff easily.", stars: 4 }
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
            description: "Comfortable headband for everyday wear and sports. Keeps hair in place without slipping. Ideal for workouts, jogs, and casual use.",
            sizes: ["One Size"],
            colors: [
                { name: "Red", code: "#FF0000", img: "../img/accessories/colors/headband-red.png" },
                { name: "Blue", code: "#0000FF", img: "../img/accessories/colors/headband-blue.png" },
                { name: "Black", code: "#000000", img: "../img/accessories/colors/headband-black.png" }
            ],
            comments: [
                { user: "user", comment: "Very soft and fits well.", stars: 5 },
                { user: "camile", comment: "Good grip, doesn’t slip.", stars: 4 },
                { user: "john", comment: "Nice colors and comfy to wear.", stars: 4 },
                { user: "mika", comment: "Wore it during training—stayed in place!", stars: 5 },
                { user: "tony", comment: "Feels great and absorbs sweat.", stars: 4 }
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
            description: "Soft and warm scarf for all seasons. Adds style while keeping you cozy. Suitable for both men and women.",
            sizes: ["One Size"],
            colors: [
                { name: "Beige", code: "#F5F5DC", img: "../img/accessories/colors/scarf-beige.png" },
                { name: "Black", code: "#000000", img: "../img/accessories/colors/scarf-black.png" },
                { name: "Navy", code: "#000080", img: "../img/accessories/colors/scarf-navy.png" }
            ],
            comments: [
                { user: "camile", comment: "Feels great and looks stylish!", stars: 5 },
                { user: "john", comment: "Perfect for cold weather.", stars: 4 },
                { user: "marco", comment: "Nice quality and design.", stars: 5 },
                { user: "lisa", comment: "Soft and doesn’t itch!", stars: 4 },
                { user: "drew", comment: "Great gift idea—my mom loved it.", stars: 5 }
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
            description: "Refreshing soap with a calming scent for everyday use. Leaves skin feeling clean and moisturized. A gentle choice for all skin types.",
            sizes: ["One Size"],
            colors: [
                { name: "White", code: "#FFFFFF", img: "../img/dailysupplies/colors/soap-white.png" },
                { name: "Lavender", code: "#E6E6FA", img: "../img/dailysupplies/colors/soap-lavender.png" }
            ],
            comments: [
                { user: "user", comment: "Smells amazing and lasts long.", stars: 4 },
                { user: "camile", comment: "Love the soothing scent!", stars: 4 },
                { user: "john", comment: "Gentle on skin.", stars: 4 },
                { user: "trisha", comment: "Foams nicely and doesn’t dry my skin.", stars: 5 },
                { user: "mark", comment: "Nice packaging and very refreshing.", stars: 4 }
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
            description: "Durable and gentle cloths for cleaning or personal use. Made with soft fibers safe for delicate surfaces. Multipurpose for kitchen, body, or travel.",
            sizes: ["One Size"],
            colors: [
                { name: "White", code: "#FFFFFF", img: "../img/dailysupplies/colors/cloths-white.png" },
                { name: "Gray", code: "#808080", img: "../img/dailysupplies/colors/cloths-gray.png" },
                { name: "Pink", code: "#FFC0CB", img: "../img/dailysupplies/colors/cloths-pink.png" }
            ],
            comments: [
                { user: "marco", comment: "Useful but wears quickly.", stars: 3 },
                { user: "user", comment: "Very soft but a bit thin.", stars: 3 },
                { user: "camile", comment: "Good enough for the price.", stars: 3 },
                { user: "ben", comment: "Works well on my glasses.", stars: 4 },
                { user: "karen", comment: "Color fades after a few washes.", stars: 2 }
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
            description: "Natural oils for relaxation, massage, and aromatherapy. Infused with calming herbs and pure extracts. Perfect for diffusers or topical use.",
            sizes: ["One Size"],
            colors: [
                { name: "Amber Bottle", code: "#996515", img: "../img/dailysupplies/colors/oils-amber.png" }
            ],
            comments: [
                { user: "john", comment: "Nice scent but fades quickly.", stars: 3 },
                { user: "marco", comment: "Very calming, I use it daily.", stars: 4 },
                { user: "user", comment: "Love the natural fragrance.", stars: 4 },
                { user: "alyssa", comment: "Relaxing after a long day!", stars: 5 },
                { user: "ken", comment: "Some bottles leaked slightly.", stars: 3 }
            ]
        }
        
    ];

    return products;
}

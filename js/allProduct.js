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
                { name: "Black", code: "#000000", img: "../img/accessories/colors/bag-black.png" },
                { name: "Red", code: "#FF0000", img: "../img/accessories/colors/bag-red.png" }
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
              { name: "Mint Green", code: "#98FF98", img: "../img/dailysupplies/colors/soap-mintgreen.png" },
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
              { name: "Amber Bottle", code: "#996515", img: "../img/dailysupplies/colors/oils-amber.png" },
              { name: "Clear Bottle", code: "#E0E0E0", img: "../img/dailysupplies/colors/oils-clear.png" },
              { name: "Green Bottle", code: "#228B22", img: "../img/dailysupplies/colors/oils-green.png" }
          ],
          comments: [
              { user: "john", comment: "Nice scent but fades quickly.", stars: 3 },
              { user: "marco", comment: "Very calming, I use it daily.", stars: 4 },
              { user: "user", comment: "Love the natural fragrance.", stars: 4 },
              { user: "alyssa", comment: "Relaxing after a long day!", stars: 5 },
              { user: "ken", comment: "Some bottles leaked slightly.", stars: 3 }
          ]
      },
          {
            id: 22,
            img: "../img/sports/smartwatch-sport.png",
            name: "Smartwatch Sport",
            price: 1899,
            rating: 5,
            sold: "3.2k",
            category: "sports",
            description: "Track your fitness goals with this waterproof smartwatch. Designed for high-performance workouts and outdoor adventures, it supports real-time GPS tracking. Stay connected and monitor your heart rate effortlessly.",
            features: ["Heart Rate Monitor", "Water Resistant", "GPS", "Step Tracker"],
            sizes: ["One Size"],
            colors: [
              { name: "Black", code: "#000000", img: "../img/sports/colors/smartwatch-black.png" },
              { name: "Red", code: "#FF0000", img: "../img/sports/colors/smartwatch-red.png" },
              { name: "Blue", code: "#0000FF", img: "../img/sports/colors/smartwatch-blue.png" }
            ],
            comments: [
              { user: "athena", comment: "Excellent watch for daily workouts!", stars: 5 },
              { user: "mike", comment: "Accurate tracking and battery lasts long.", stars: 5 },
              { user: "joy", comment: "Really stylish and functional.", stars: 4 },
              { user: "lena", comment: "Love the design and fitness modes.", stars: 5 },
              { user: "jake", comment: "Must-have for runners!", stars: 4 }
            ]
          },
          {
            id: 23,
            img: "../img/sports/Wrist_Exercises.png",
            name: "Wrist Exerciser",
            price: 299,
            rating: 4,
            sold: "1.8k",
            category: "sports",
            description: "This wrist exerciser strengthens your forearm and hand muscles. Its compact build makes it ideal for both home and office use. Great for athletes or recovery from strain injuries.",
            features: ["Adjustable Resistance", "Non-Slip Grip"],
            sizes: ["One Size"],
            colors: [
              { name: "Black", code: "#000000", img: "../img/sports/colors/wrist-exerciser-black.png" },
              { name: "Grey", code: "#808080", img: "../img/sports/colors/wrist-exerciser-grey.png" },
              { name: "Orange", code: "#FFA500", img: "../img/sports/colors/wrist-exerciser-orange.png" }
            ],
            comments: [
              { user: "liam", comment: "Great for daily wrist workouts.", stars: 4 },
              { user: "sasha", comment: "Simple and effective.", stars: 3 },
              { user: "nina", comment: "Helped a lot with my grip strength.", stars: 4 },
              { user: "kyle", comment: "Works well, though feels stiff at first.", stars: 3 },
              { user: "emily", comment: "Perfect for post-injury recovery!", stars: 5 }
            ]
          },
          {
            id: 24,
            img: "../img/sports/table-tennis-set.png",
            name: "Table Tennis Set",
            price: 499,
            rating: 4,
            sold: "1.5k",
            category: "sports",
            description: "Complete table tennis set for fun matches at home or the club. Features durable paddles and high-bounce balls. Perfect for players of all skill levels.",
            features: ["2 Paddles", "3 Balls", "Carrying Case"],
            sizes: ["Standard"],
            colors: [
              { name: "Red", code: "#FF0000", img: "../img/sports/colors/table-tennis-red.png" },
              { name: "Blue", code: "#0000FF", img: "../img/sports/colors/table-tennis-blue.png" },
              { name: "Green", code: "#228B22", img: "../img/sports/colors/table-tennis-green.png" }
            ],
            comments: [
              { user: "alex", comment: "Awesome set for family games!", stars: 4 },
              { user: "nora", comment: "Great quality paddles.", stars: 4 },
              { user: "henry", comment: "Really improved my spin!", stars: 5 },
              { user: "emma", comment: "Nice grip and control.", stars: 4 },
              { user: "leo", comment: "Good value for the price.", stars: 4 }
            ]
          },
          {
            id: 25,
            img: "../img/sports/Valeo_Neoprene_Hand_Weights.png",
            name: "Neoprene Hand Weights",
            price: 749,
            rating: 5,
            sold: "3.5k",
            category: "sports",
            description: "Ideal for toning and strength workouts. The neoprene coating provides a comfortable, anti-slip grip. Available in multiple weights and vibrant colors.",
            features: ["Neoprene Coating", "Anti-Slip Surface"],
            sizes: ["2 lbs", "5 lbs", "10 lbs"],
            colors: [
              { name: "Purple", code: "#800080", img: "../img/sports/colors/weights-purple.png" },
              { name: "Pink", code: "#FFC0CB", img: "../img/sports/colors/weights-pink.png" },
              { name: "Teal", code: "#008080", img: "../img/sports/colors/weights-teal.png" }
            ],
            comments: [
              { user: "ana", comment: "Love the colors and feel.", stars: 5 },
              { user: "noah", comment: "Exactly what I needed for home workouts.", stars: 5 },
              { user: "bella", comment: "Comfortable grip and doesn't slip.", stars: 4 },
              { user: "tony", comment: "Weights are well balanced and solid.", stars: 5 },
              { user: "rhea", comment: "Fun colors and easy to clean.", stars: 4 }
            ]
          },
          {
            id: 26,
            img: "../img/sports/Professional_Badminton_Rackets.png",
            name: "Professional Badminton Racket",
            price: 1099,
            rating: 4,
            sold: "2.7k",
            category: "sports",
            description: "Engineered for speed and control, this racket suits all levels. The carbon fiber build ensures durability and lightweight handling. Absorbs shock effectively for longer play comfort.",
            features: ["Carbon Fiber", "Shock Absorption"],
            sizes: ["One Size"],
            colors: [
              { name: "Black", code: "#000000", img: "../img/sports/colors/racket-black.png" },
              { name: "Yellow", code: "#FFFF00", img: "../img/sports/colors/racket-yellow.png" },
              { name: "Red", code: "#FF0000", img: "../img/sports/colors/racket-red.png" }
            ],
            comments: [
              { user: "kai", comment: "Super light and responsive!", stars: 4 },
              { user: "maya", comment: "Helps me improve my smashes.", stars: 5 },
              { user: "leo", comment: "Nice grip and power delivery.", stars: 4 },
              { user: "sophie", comment: "I use it almost daily at the club.", stars: 5 },
              { user: "jay", comment: "Worth the price for beginners too.", stars: 4 }
            ]
          },
          {
            id: 27,
            img: "../img/sports/volleyball.png",
            name: "Professional Volleyball",
            price: 699,
            rating: 5,
            sold: "1.9k",
            category: "sports",
            description: "Designed for professional and recreational play, this volleyball offers great grip and balance. Made from high-quality synthetic leather for durability. Suitable for both indoor and outdoor games.",
            features: ["Synthetic Leather", "Durable Stitching", "Indoor/Outdoor Use"],
            sizes: ["Standard"],
            colors: [
              { name: "Yellow", code: "#FFD700", img: "../img/sports/colors/volleyball-yellow.png" },
              { name: "White", code: "#FFFFFF", img: "../img/sports/colors/volleyball-white.png" },
              { name: "Blue", code: "#1E90FF", img: "../img/sports/colors/volleyball-blue.png" }
            ],
            comments: [
              { user: "ivy", comment: "Super responsive touch and flight!", stars: 5 },
              { user: "max", comment: "Great for beach and court games.", stars: 5 },
              { user: "jules", comment: "Looks great and feels premium.", stars: 5 },
              { user: "rose", comment: "Handles spikes and digs well.", stars: 4 },
              { user: "ethan", comment: "Best volleyball I’ve owned.", stars: 5 }
            ]
          },
          {
            id: 28,
            img: "../img/kids/wooden_blocks.png",
            name: "Wooden Building Blocks",
            price: 620.00,
            rating: 5,
            sold: "6.7k",
            category: "kids",
            description: "High-quality wooden building blocks to spark creativity and improve motor skills in kids. These blocks help in developing fine motor skills, imagination, and problem-solving. A perfect educational toy to enhance early childhood development.",
            sizes: ["Set of 50", "Set of 100", "Set of 150"],
            colors: [
              { name: "Green", code: "#008000", img: "../img/kids/colors/blocks-green.png" },              
              { name: "Red", code: "#FF0000", img: "../img/kids/colors/blocks-red.png" },
              { name: "Blue", code: "#0000FF", img: "../img/kids/colors/blocks-blue.png" }
            ],
            comments: [
              { user: "ian", comment: "Endless fun for my son!", stars: 5 },
              { user: "grace", comment: "Very well-made and safe.", stars: 5 },
              { user: "jake", comment: "Keeps my kids entertained for hours.", stars: 5 },
              { user: "lucy", comment: "Great quality and sturdy!", stars: 5 },
              { user: "olivia", comment: "Perfect for building and learning.", stars: 5 }
            ]
          },
          {
            id: 29,
            img: "../img/kids/strawberry_cat_plush.png",
            name: "Strawberry Cat Plush",
            price: 460.00,
            rating: 5,
            sold: "4.2k",
            category: "kids",
            description: "Adorable cat plushie with a strawberry hat. Made with ultra-soft material that’s perfect for cuddling or displaying. A cute companion that your child will love to carry around wherever they go.",
            sizes: ["One Size"],
            colors: [
              { name: "Pink", code: "#FF6F91", img: "../img/kids/colors/strawberry-cat-pink.png" },
              { name: "Green", code: "#388E3C", img: "../img/kids/colors/strawberry-cat-green.png" },
              { name: "Purple", code: "#9C27B0", img: "../img/kids/colors/strawberry-cat-purple.png" }
            ],
            comments: [
              { user: "liza", comment: "Super soft and cute!", stars: 5 },
              { user: "hana", comment: "My kid takes it everywhere!", stars: 5 },
              { user: "sophia", comment: "Perfect plushie, so soft!", stars: 5 },
              { user: "emily", comment: "Great gift for my niece.", stars: 5 },
              { user: "alice", comment: "So cuddly and cute, my daughter loves it.", stars: 5 }
            ]
          },
          {
            id: 30,
            img: "../img/kids/dress.png",
            name: "Checkered Dress",
            price: 320.00,
            rating: 4,
            sold: "3.1k",
            category: "kids",
            description: "Charming checkered dress for kids. Lightweight, breathable, and stylish for any occasion. A versatile piece that can be worn for both casual play and formal events.",
            sizes: ["S", "M", "L"],
            colors: [
              { name: "Blue", code: "#3B5998", img: "../img/kids/colors/dress-blue.png" },
              { name: "Red", code: "#C0392B", img: "../img/kids/colors/dress-red.png" },
              { name: "Yellow", code: "#F1C40F", img: "../img/kids/colors/dress-yellow.png" }
            ],
            comments: [
              { user: "mia", comment: "My daughter looks so cute in it!", stars: 5 },
              { user: "ella", comment: "Perfect fit and very comfy.", stars: 4 },
              { user: "janine", comment: "Nice material and vibrant colors.", stars: 4 },
              { user: "lucy", comment: "Love how soft and light it feels!", stars: 5 },
              { user: "amanda", comment: "Perfect for spring and summer!", stars: 5 }
            ]
          },
          {
            id: 31,
            img: "../img/kids/teddy_bear.png",
            name: "Plush Teddy Bear",
            price: 550.00,
            rating: 5,
            sold: "5.4k",
            category: "kids",
            description: "Soft and huggable teddy bear perfect for kids and collectors. Made with ultra-soft fabric and filled for maximum cuddles. An ideal gift for your little one or as a cozy addition to their room.",
            sizes: ["Large"],
            colors: [
              { name: "Purple", code: "#B388EB", img: "../img/kids/colors/teddy-purple.png" },
              { name: "Brown", code: "#A0522D", img: "../img/kids/colors/teddy-brown.png" },
              { name: "Pink", code: "#FFC0CB", img: "../img/kids/colors/teddy-pink.png" }
            ],
            comments: [
              { user: "sophie", comment: "So cuddly and big!", stars: 5 },
              { user: "mark", comment: "My niece loves it!", stars: 5 },
              { user: "james", comment: "Perfect teddy bear for my son!", stars: 5 },
              { user: "chloe", comment: "Best plush toy ever!", stars: 5 },
              { user: "susan", comment: "Great quality and super soft!", stars: 5 }
            ]
          },
          {
            id: 32,
            img: "../img/kids/overalls.png",
            name: "Corduroy Overalls Set",
            price: 480.00,
            rating: 4,
            sold: "2.9k",
            category: "kids",
            description: "Comfortable and stylish overalls made from soft corduroy fabric. Ideal for playdates or casual days. The soft texture and relaxed fit make it perfect for your little one’s daily adventures.",
            sizes: ["6M", "12M", "18M"],
            colors: [
              { name: "Brown", code: "#A97155", img: "../img/kids/colors/overalls-brown.png" },
              { name: "Beige", code: "#F5F5DC", img: "../img/kids/colors/overalls-beige.png" },
              { name: "Light Blue", code: "#ADD8E6", img: "../img/kids/colors/overalls-lightblue.png" }
            ],
            comments: [
              { user: "joey", comment: "Super adorable!", stars: 4 },
              { user: "rhea", comment: "Love the material.", stars: 4 },
              { user: "grace", comment: "Perfect for the warmer months.", stars: 4 },
              { user: "ella", comment: "So comfy for my baby!", stars: 5 },
              { user: "mason", comment: "Great fit, highly recommend!", stars: 5 }
            ]
          },
          {
            id: 33,
            img: "../img/hardware/cuisinart_toaster.png",
            name: "Cuisinart Toaster",
            price: 2399,
            rating: 4,
            sold: "650",
            category: "hardware",
            description: "Sleek and modern toaster with multiple browning levels for your perfect toast. The toaster comes with adjustable settings and a dual-slot design for convenience. Compact and stylish, it’s the perfect addition to any modern kitchen.",
            features: ["Dual-Slot", "Adjustable Settings"],
            sizes: ["One Size"],
            colors: [
              { name: "Silver", code: "#C0C0C0", img: "../img/hardware/colors/cuisinart_toaster-silver.png" },
              { name: "Matte Black", code: "#1C1C1C", img: "../img/hardware/colors/cuisinart_toaster-black.png" },
              { name: "Rose Gold", code: "#B76E79", img: "../img/hardware/colors/cuisinart_toaster-rosegold.png" }
            ],
            comments: [
              { user: "lucas", comment: "Toasts evenly and looks premium!", stars: 4 },
              { user: "jo", comment: "Good design and functionality.", stars: 4 },
              { user: "maria", comment: "Perfect for small kitchens. Sleek and efficient.", stars: 5 },
              { user: "nina", comment: "I love the rose gold color, very elegant.", stars: 5 },
              { user: "chris", comment: "Makes great toast, but a bit noisy.", stars: 3 }
            ]
          },
          {
            id: 34,
            img: "../img/hardware/black_toaster_oven.png",
            name: "Black Toaster Oven",
            price: 3799,
            rating: 5,
            sold: "740",
            category: "hardware",
            description: "Compact toaster oven perfect for baking, toasting, and broiling. With a timer function and non-stick interior, it makes cooking convenient and easy to clean. The sleek black design fits into any kitchen decor seamlessly.",
            features: ["Timer Function", "Non-Stick Interior"],
            sizes: ["One Size"],
            colors: [
              { name: "Black", code: "#000000", img: "../img/hardware/colors/black_toaster_oven-black.png" },
              { name: "Stainless", code: "#B0C4DE", img: "../img/hardware/colors/black_toaster_oven-stainless.png" },
              { name: "Charcoal Grey", code: "#36454F", img: "../img/hardware/colors/black_toaster_oven-charcoal.png" }
            ],
            comments: [
              { user: "chris", comment: "Perfect for quick meals. Heats fast!", stars: 5 },
              { user: "lynn", comment: "Compact and powerful. Worth the price.", stars: 5 },
              { user: "jessica", comment: "Great oven for the price, very reliable.", stars: 5 },
              { user: "daniel", comment: "It’s a bit smaller than expected but works great.", stars: 4 },
              { user: "lucy", comment: "Love the design, works well for my baking.", stars: 5 }
            ]
          },
          {
            id: 35,
            img: "../img/hardware/electric_kettle_with_stainless.png",
            name: "Electric Kettle",
            price: 1699,
            rating: 5,
            sold: "2.1k",
            category: "hardware",
            description: "Fast-boiling electric kettle with a sleek stainless steel finish. The auto shut-off and cordless base make it safe and convenient to use. It’s perfect for boiling water quickly for tea, coffee, or instant meals.",
            features: ["Auto Shut-Off", "Cordless Base"],
            sizes: ["1.7L"],
            colors: [
              { name: "Steel", code: "#D3D3D3", img: "../img/hardware/colors/electric_kettle-steel.png" },
              { name: "White", code: "#FFFFFF", img: "../img/hardware/colors/electric_kettle-white.png" },
              { name: "Black", code: "#000000", img: "../img/hardware/colors/electric_kettle-black.png" }
            ],
            comments: [
              { user: "ivy", comment: "Boils fast and looks sleek!", stars: 5 },
              { user: "sean", comment: "Easy to clean and use. Great buy!", stars: 5 },
              { user: "michael", comment: "Fast boiling and solid construction. I love it!", stars: 5 },
              { user: "sofia", comment: "Perfect kettle for our kitchen. Love the auto shut-off feature.", stars: 5 },
              { user: "emily", comment: "The black version looks elegant in my kitchen.", stars: 4 }
            ]
          },
          {
            id: 36,
            img: "../img/hardware/air_fryer_black.png",
            name: "Air Fryer",
            price: 4499,
            rating: 4,
            sold: "1.6k",
            category: "hardware",
            description: "Healthier way to fry with less oil and more crisp. The non-stick basket and digital display make it user-friendly and easy to clean. Ideal for making crispy fries, chicken, and other fried foods with a healthier twist.",
            features: ["Non-Stick Basket", "Digital Display"],
            sizes: ["3.5L"],
            colors: [
              { name: "Black", code: "#000000", img: "../img/hardware/colors/air_fryer-black.png" },
              { name: "White", code: "#F5F5F5", img: "../img/hardware/colors/air_fryer-white.png" },
              { name: "Red", code: "#FF0000", img: "../img/hardware/colors/air_fryer-red.png" }
            ],
            comments: [
              { user: "tina", comment: "Crispy fries without the guilt!", stars: 4 },
              { user: "omar", comment: "Best kitchen purchase I've made.", stars: 4 },
              { user: "matt", comment: "Perfect for cooking quick meals!", stars: 5 },
              { user: "nina", comment: "Makes food crispy and tasty without oil.", stars: 5 },
              { user: "alex", comment: "I love the digital controls. So easy to use.", stars: 4 }
            ]
          },
          {
            id: 37,
            img: "../img/hardware/samsung_smart_fridge.png",
            name: "Samsung Smart Fridge",
            price: 52999,
            rating: 5,
            sold: "520",
            category: "hardware",
            description: "Smart refrigerator with touchscreen and Wi-Fi features. The smart display allows you to control your fridge remotely, and the ice maker is perfect for family gatherings. It’s energy efficient and a perfect fit for modern kitchens.",
            features: ["Smart Display", "Ice Maker", "Energy Efficient"],
            sizes: ["20 cu. ft."],
            colors: [
              { name: "Steel", code: "#DCDCDC", img: "../img/hardware/colors/samsung_fridge-steel.png" },
              { name: "Black Stainless", code: "#2F4F4F", img: "../img/hardware/colors/samsung_fridge-blacksteel.png" },
              { name: "Bright White", code: "#FFFFFF", img: "../img/hardware/colors/samsung_fridge-white.png" }
            ],
            comments: [
              { user: "hana", comment: "Amazing tech! I love the display panel.", stars: 5 },
              { user: "dev", comment: "Makes life easier and looks amazing.", stars: 5 },
              { user: "sarah", comment: "Perfect fridge for a tech-savvy family.", stars: 5 },
              { user: "lucas", comment: "I love the energy-saving feature!", stars: 5 },
              { user: "chris", comment: "Worth every penny. Excellent fridge.", stars: 5 }
            ]
          },
          {
            id: 38,
            img: "../img/hardware/best_buy_whirlpool_stove.png",
            name: "Whirlpool Electric Stove",
            price: 24999,
            rating: 4,
            sold: "690",
            category: "hardware",
            description: "Modern electric stove with smooth ceramic cooktop and touch controls. Offers even heat distribution and energy efficiency for daily cooking. A reliable centerpiece for any contemporary kitchen.",
            features: ["Ceramic Cooktop", "5 Burners", "Touch Controls"],
            sizes: ["Standard"],
            colors: [
              { name: "White", code: "#FFFFFF", img: "../img/hardware/colors/whirlpool_stove-white.png" },
              { name: "Black", code: "#000000", img: "../img/hardware/colors/whirlpool_stove-black.png" },
              { name: "Slate Grey", code: "#708090", img: "../img/hardware/colors/whirlpool_stove-slate.png" }
            ],
            comments: [
              { user: "keira", comment: "Even heating and easy to clean!", stars: 4 },
              { user: "jon", comment: "Perfect upgrade for my kitchen.", stars: 4 },
              { user: "annie", comment: "Love the smooth top surface—so easy to wipe down.", stars: 5 },
              { user: "travis", comment: "Looks great and cooks evenly. Happy with the purchase.", stars: 4 },
              { user: "mia", comment: "Wish it had more color options, but performance is solid.", stars: 4 }
            ]
          },
          {
            id: 39,
            img: "../img/home/mattress.png",
            name: "Comfort Mattress",
            price: 5999,
            rating: 4,
            sold: "870",
            category: "home",
            description: "High-quality foam mattress designed to provide excellent body support and pressure relief. The breathable fabric keeps you cool and comfortable throughout the night. Ideal for all types of sleepers looking for restful sleep.",
            features: ["Memory Foam", "Breathable Fabric"],
            sizes: ["Single", "Double", "Queen", "King"],
            colors: [
              { name: "White", code: "#FFFFFF", img: "../img/home/colors/mattress-white.png" },
              { name: "Grey", code: "#D3D3D3", img: "../img/home/colors/mattress-grey.png" },
              { name: "Charcoal", code: "#36454F", img: "../img/home/colors/mattress-charcoal.png" }
            ],
            comments: [
              { user: "alex", comment: "Very comfortable! I sleep better now.", stars: 4 },
              { user: "ken", comment: "Good quality for the price. Would recommend.", stars: 4 },
              { user: "rachel", comment: "Supportive yet soft—just what I needed.", stars: 5 },
              { user: "daniel", comment: "Took a few days to adjust, but now it’s perfect.", stars: 4 },
              { user: "ivy", comment: "No more back pain in the mornings!", stars: 5 }
            ]
          },
          {
            id: 40,
            img: "../img/home/blanket.png",
            name: "Cozy Blanket",
            price: 1299,
            rating: 5,
            sold: "2.3k",
            category: "home",
            description: "Experience warmth and softness like never before with this cozy blanket. It's perfect for cold nights, lounging on the couch, or snuggling in bed. Durable and easy to wash for everyday comfort.",
            features: ["Ultra Soft", "Machine Washable"],
            sizes: ["Twin", "Full", "Queen"],
            colors: [
              { name: "Beige", code: "#F5F5DC", img: "../img/home/colors/blanket-beige.png" },
              { name: "Navy Blue", code: "#000080", img: "../img/home/colors/blanket-navyblue.png" },
              { name: "Wine Red", code: "#722F37", img: "../img/home/colors/blanket-red.png" }
            ],
            comments: [
              { user: "claire", comment: "So soft and warm, I love it!", stars: 5 },
              { user: "ryan", comment: "Perfect size and doesn’t shed!", stars: 5 },
              { user: "harper", comment: "It keeps me warm without being too heavy.", stars: 5 },
              { user: "noah", comment: "Feels luxurious and washes well.", stars: 5 },
              { user: "ella", comment: "Everyone in the family wants one now!", stars: 5 }
            ]
          },
          {
            id: 41,
            img: "../img/home/garfield_pillow.png",
            name: "Garfield Pillow",
            price: 699,
            rating: 4,
            sold: "1.1k",
            category: "home",
            description: "Add some fun to your space with this Garfield-themed pillow. It’s soft, squishy, and full of personality—just like the famous cat himself. Great for both kids and nostalgic adults.",
            features: ["Soft Plush", "Cartoon Print"],
            sizes: ["Standard"],
            colors: [
              { name: "Orange", code: "#FFA500", img: "../img/home/colors/garfield_pillow-orange.png" },
              { name: "Cream", code: "#FFFDD0", img: "../img/home/colors/garfield_pillow-cream.png" },
              { name: "Light Yellow", code: "#FFFACD", img: "../img/home/colors/garfield_pillow-yellow.png" }
            ],
            comments: [
              { user: "mia", comment: "Super cute! My kid loves it.", stars: 4 },
              { user: "eli", comment: "Great pillow and fun design.", stars: 4 },
              { user: "tom", comment: "Perfect gift for Garfield fans.", stars: 5 },
              { user: "ivy", comment: "Comfy and just the right size for lounging.", stars: 4 },
              { user: "sasha", comment: "A fun addition to my couch setup.", stars: 5 }
            ]
          },
          {
            id: 42,
            img: "../img/home/black_cat_plush.png",
            name: "Cat Plush",
            price: 399,
            rating: 5,
            sold: "3.5k",
            category: "home",
            description: "This adorable plush black cat is perfect for cuddling or decorating your living space. Its soft texture and charming design make it a favorite among kids and cat lovers. A cozy companion for any age.",
            features: ["Soft Material", "Cute Design"],
            sizes: ["Small", "Medium"],
            colors: [
              { name: "Black", code: "#000000", img: "../img/home/colors/black_cat_plush-black.png" },
              { name: "Gray", code: "#808080", img: "../img/home/colors/black_cat_plush-gray.png" },
              { name: "Lavender", code: "#E6E6FA", img: "../img/home/colors/black_cat_plush-lavender.png" }
            ],
            comments: [
              { user: "luna", comment: "So soft and huggable!", stars: 5 },
              { user: "kai", comment: "Looks great on my bed!", stars: 5 },
              { user: "zoe", comment: "My daughter carries it everywhere.", stars: 5 },
              { user: "jude", comment: "Softest plush toy we've bought so far.", stars: 5 },
              { user: "ivy", comment: "Great gift idea for kids or cat lovers.", stars: 5 }
            ]
          },
        
          {
            id: 43,
            img: "../img/dailysupplies/pastel_notebooks.png",
            name: "Pastel Colored Notebook Set",
            price: 499,
            rating: 4,
            sold: "2.8k",
            category: "dailysupplies",
            description: "Aesthetic pastel notebook set perfect for journaling, note-taking, and organizing. Smooth paper with sturdy covers in various calming colors. Comes in a pack of assorted shades.",
            features: ["Set of 10", "Smooth Paper", "Soft Covers"],
            sizes: ["A5"],
            colors: [
              { name: "Pink", code: "#FFC0CB", img: "../img/dailysupplies/colors/notebook-pink.png" },
              { name: "Blue", code: "#ADD8E6", img: "../img/dailysupplies/colors/notebook-blue.png" },
              { name: "Green", code: "#90EE90", img: "../img/dailysupplies/colors/notebook-green.png" }
            ],
            comments: [
              { user: "nina", comment: "So cute and useful for school!", stars: 4 },
              { user: "marc", comment: "Love the pastel shades. Very aesthetic.", stars: 4 },
              { user: "ivy", comment: "Nice quality paper and binding.", stars: 4 },
              { user: "luke", comment: "Great for my planner and notes.", stars: 4 },
              { user: "amy", comment: "Perfect size and easy to carry around.", stars: 5 }
            ]
          },
          {
            id: 44,
            img: "../img/dailysupplies/pencil_case.png",
            name: "Pencil Case",
            price: 499,
            rating: 4,
            sold: "1.8k",
            category: "dailysupplies",
            description: "Stylish and compact pencil case for organizing pens, pencils, and small tools. Features an outer pocket for easy access. Made of durable canvas material.",
            features: ["Canvas Material", "Zipper Closure", "Front Pocket"],
            sizes: ["One Size"],
            defaultColor: "Green",
            colors: [
              { name: "Green", code: "#A9B89E", img: "../img/dailysupplies/colors/pencil_case-green.png" },
              { name: "Pink", code: "#FFB6C1", img: "../img/dailysupplies/colors/pencil_case-pink.png" },
              { name: "Gray", code: "#D3D3D3", img: "../img/dailysupplies/colors/pencil_case-gray.png" }
            ],
            comments: [
              { user: "nina", comment: "Holds all my pens perfectly!", stars: 4 },
              { user: "jacob", comment: "Simple but practical.", stars: 4 },
              { user: "zara", comment: "Love the outer pocket design.", stars: 4 },
              { user: "keith", comment: "Feels sturdy and well-made.", stars: 4 },
              { user: "amy", comment: "Fits nicely in my backpack.", stars: 4 }
            ]
          },
          {
            id: 45,
            img: "../img/dailysupplies/yarn_balls_set.png",
            name: "Soft Yarn Set",
            price: 349,
            rating: 5,
            sold: "2.4k",
            category: "dailysupplies",
            description: "Pack of soft, colorful yarn balls perfect for knitting and crochet. Great texture and easy to work with for beginners and experts. Includes three versatile shades.",
            features: ["3 Colors", "Soft Texture", "Tangle-Free"],
            sizes: ["Small Skeins"],
            defaultColor: "Brown",
            colors: [
              { name: "Brown", code: "#8B4513", img: "../img/dailysupplies/colors/yarn-brown.png" },
              { name: "Cream", code: "#FAF0E6", img: "../img/dailysupplies/colors/yarn-cream.png" },
              { name: "Yellow", code: "#F0E68C", img: "../img/dailysupplies/colors/yarn-yellow.png" }
            ],
            comments: [
              { user: "leo", comment: "Really soft and doesn’t tangle.", stars: 5 },
              { user: "mira", comment: "Love the color combo!", stars: 5 },
              { user: "ben", comment: "Perfect for baby blankets.", stars: 5 },
              { user: "faye", comment: "Will order again for sure.", stars: 5 },
              { user: "noah", comment: "Nice quality yarn for the price.", stars: 5 }
            ]
          },
          {
            id: 46,
            img: "../img/dailysupplies/earmuffs.png",
            name: "Cozy Winter Earmuffs",
            price: 599,
            rating: 4,
            sold: "980",
            category: "dailysupplies",
            description: "Keep your ears warm in style with these fluffy earmuffs. Soft and lightweight with an adjustable headband. A perfect winter essential.",
            features: ["Faux Fur", "Adjustable Band", "Warm & Lightweight"],
            sizes: ["One Size"],
            defaultColor: "White",
            colors: [
              { name: "White", code: "#FFF5E1", img: "../img/dailysupplies/colors/earmuffs-white.png" },
              { name: "Beige", code: "#D2B48C", img: "../img/dailysupplies/colors/earmuffs-beige.png" },
              { name: "Gray", code: "#BEBEBE", img: "../img/dailysupplies/colors/earmuffs-gray.png" }
            ],
            comments: [
              { user: "sophia", comment: "Super soft and warm!", stars: 4 },
              { user: "jack", comment: "Looks great with any winter outfit.", stars: 4 },
              { user: "hannah", comment: "Comfy for long walks in the cold.", stars: 4 },
              { user: "owen", comment: "Surprisingly durable.", stars: 4 },
              { user: "ivy", comment: "Exactly what I needed this season.", stars: 4 }
            ]
          }      
    ];

    return products;
}

// product.js:

const products = [
  {
    name: "Classic Demin Button-Down Shirt",
    description:
      "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
    price: 8000,
    discountPrice: 7500,
    countInStock: 20,
    sku: "OX-SH-001",
    category: "Top Wear",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Sring Casual",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757253166/deepfashion/MEN/Denim/id_00000089/46_7_additional.jpg",
        altText: "Classic Demin Button-Down Shirt full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757255670/deepfashion/MEN/Sweaters/id_00000016/01_1_front.jpg",
        altText: "Classic Demin Button-Down Shirt Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757253165/deepfashion/MEN/Denim/id_00000089/46_3_back.jpg",
        altText: "Classic Demin Button-Down Shirt Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757255671/deepfashion/MEN/Sweaters/id_00000016/01_2_side.jpg",
        altText: "Classic Demin Button-Down Shirt Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757255670/deepfashion/MEN/Sweaters/id_00000016/01_1_front.jpg",
        altText: "Classic Demin Button-Down Shirt Additional View",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  },

  {
    name: "Makaveli Bomber Jacket",
    description:
      "This Makaveli Bomber Jacket is a premium jackets_coats designed for women. Crafted from high-quality Wool, it ensures durability and comfort. Perfect for winter warmers occasions, it offers both style and practicality. With attention to detail, it’s a wardrobe essential that blends fashion and functionality.",
    price: 14500,
    discountPrice: 13500,
    countInStock: 12,
    sku: "SKU-WOM-JAC-001",
    category: "Jackets_Coats",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Grey", "Olive", "Navy"],
    collections: "Winter Warmers",
    material: "Wool, Polyester, Nylon, Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/WOMEN/Jackets_Coats/id_00000001/01_1_front.jpg",
        altText: "Bomber Jacket 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337645/deepfashion/WOMEN/Jackets_Coats/id_00000001/01_3_back.jpg",
        altText: "Bomber Jacket 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337646/deepfashion/WOMEN/Jackets_Coats/id_00000001/01_2_side.jpg",
        altText: "Bomber Jacket 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337647/deepfashion/WOMEN/Jackets_Coats/id_00000001/01_4_full.jpg",
        altText: "Bomber Jacket 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337648/deepfashion/WOMEN/Jackets_Coats/id_00000001/01_7_additional.jpg",
        altText: "Bomber Jacket 1 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 21,
  },
  {
    name: "Denim Jeans 1",
    description:
      "The Denim Jeans 1 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality. With attention to detail, it’s a wardrobe essential that blends fashion and functionality.",
    price: 75000,
    discountPrice: 73000,
    countInStock: 20,
    sku: "SKU-MEN-DEN-001",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Blue", "Black"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337701/deepfashion/MEN/Denim/id_00000011/01_1_front.jpg",
        altText: "Denim Jeans 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337702/deepfashion/MEN/Denim/id_00000011/01_3_back.jpg",
        altText: "Denim Jeans 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337703/deepfashion/MEN/Denim/id_00000011/01_2_side.jpg",
        altText: "Denim Jeans 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337704/deepfashion/MEN/Denim/id_00000011/01_4_full.jpg",
        altText: "Denim Jeans 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337705/deepfashion/MEN/Denim/id_00000011/01_7_additional.jpg",
        altText: "Denim Jeans 1 Additional View",
      },
    ],
    rating: 4.6,
    numReviews: 34,
  },
  {
    name: "Graphic Tee 1",
    description:
      "The Graphic Tee 1 is a premium graphic_tees designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality. With attention to detail, it’s a wardrobe essential that blends fashion and functionality.",
    price: 9500,
    discountPrice: 9000,
    countInStock: 25,
    sku: "SKU-WOM-GRT-001",
    category: "Graphic_Tees",
    brand: "Streetline",
    sizes: ["S", "M", "L"],
    colors: ["White", "Black"],
    collections: "Street Style",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337800/deepfashion/WOMEN/Graphic_Tees/id_00000031/01_1_front.jpg",
        altText: "Graphic Tee 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337801/deepfashion/WOMEN/Graphic_Tees/id_00000031/01_3_back.jpg",
        altText: "Graphic Tee 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337802/deepfashion/WOMEN/Graphic_Tees/id_00000031/01_2_side.jpg",
        altText: "Graphic Tee 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337803/deepfashion/WOMEN/Graphic_Tees/id_00000031/01_4_full.jpg",
        altText: "Graphic Tee 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337804/deepfashion/WOMEN/Graphic_Tees/id_00000031/01_7_additional.jpg",
        altText: "Graphic Tee 1 Additional View",
      },
    ],
    rating: 4.5,
    numReviews: 28,
  },
  {
    name: "Sweater 1",
    description:
      "The Sweater 1 is a premium sweaters designed for men. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for winter warmers occasions, it offers both style and practicality. With attention to detail, it’s a wardrobe essential that blends fashion and functionality.",
    price: 16500,
    discountPrice: 15000,
    countInStock: 18,
    sku: "SKU-MEN-SWE-001",
    category: "Sweaters",
    brand: "Classic Co.",
    sizes: ["M", "L", "XL"],
    colors: ["Grey", "Black"],
    collections: "Winter Warmers",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337750/deepfashion/MEN/Sweaters/id_00000021/01_1_front.jpg",
        altText: "Sweater 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337751/deepfashion/MEN/Sweaters/id_00000021/01_3_back.jpg",
        altText: "Sweater 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337752/deepfashion/MEN/Sweaters/id_00000021/01_2_side.jpg",
        altText: "Sweater 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337753/deepfashion/MEN/Sweaters/id_00000021/01_4_full.jpg",
        altText: "Sweater 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337754/deepfashion/MEN/Sweaters/id_00000021/01_7_additional.jpg",
        altText: "Sweater 1 Additional View",
      },
    ],
    rating: 4.4,
    numReviews: 31,
  },
  {
    name: "Skirt 7",
    description:
      "The Skirt 7 is a premium skirt designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 14571,
    discountPrice: 13200,
    countInStock: 43,
    sku: "SKU-WOM-SKI-007",
    category: "Skirt",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Skirt 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Skirt 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Skirt 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Skirt 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Skirt 7 Additional View",
      },
    ],
    rating: 4.2,
    numReviews: 42,
  },
  {
    name: "Tees_Tanks 4",
    description:
      "The Tees_Tanks 4 is a premium tees_tanks designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 18961,
    discountPrice: 17780,
    countInStock: 11,
    sku: "SKU-WOM-TEE-004",
    category: "Tees_Tanks",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Tees_Tanks 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Tees_Tanks 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Tees_Tanks 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Tees_Tanks 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Tees_Tanks 4 Additional View",
      },
    ],
    rating: 4.2,
    numReviews: 47,
  },
  {
    name: "Sweaters 1",
    description:
      "The Sweaters 1 is a premium sweaters designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 6559,
    discountPrice: 5749,
    countInStock: 32,
    sku: "SKU-MEN-SWE-001",
    category: "Sweaters",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Sweaters 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Sweaters 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Sweaters 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Sweaters 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Sweaters 1 Additional View",
      },
    ],
    rating: 4.0,
    numReviews: 76,
  },
  {
    name: "Leggings 7",
    description:
      "The Leggings 7 is a premium leggings designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 36326,
    discountPrice: 34527,
    countInStock: 34,
    sku: "SKU-WOM-LEG-007",
    category: "Leggings",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Leggings 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Leggings 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Leggings 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Leggings 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Leggings 7 Additional View",
      },
    ],
    rating: 4.8,
    numReviews: 71,
  },
  {
    name: "Sweaters 7",
    description:
      "The Sweaters 7 is a premium sweaters designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 26078,
    discountPrice: 25603,
    countInStock: 42,
    sku: "SKU-MEN-SWE-007",
    category: "Sweaters",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Sweaters 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Sweaters 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Sweaters 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Sweaters 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Sweaters 7 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 73,
  },
  {
    name: "Hoodies 10",
    description:
      "The Hoodies 10 is a premium hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 14168,
    discountPrice: 12728,
    countInStock: 10,
    sku: "SKU-WOM-HOO-010",
    category: "Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Hoodies 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Hoodies 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Hoodies 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Hoodies 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Hoodies 10 Additional View",
      },
    ],
    rating: 4.4,
    numReviews: 62,
  },
  {
    name: "Suiting 8",
    description:
      "The Suiting 8 is a premium suiting designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 141986,
    discountPrice: 141766,
    countInStock: 16,
    sku: "SKU-MEN-SUI-008",
    category: "Suiting",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Suiting 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Suiting 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Suiting 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Suiting 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Suiting 8 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 32,
  },
  {
    name: "Skirt 2",
    description:
      "The Skirt 2 is a premium skirt designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 14335,
    discountPrice: 13641,
    countInStock: 18,
    sku: "SKU-WOM-SKI-002",
    category: "Skirt",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Skirt 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Skirt 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Skirt 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Skirt 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Skirt 2 Additional View",
      },
    ],
    rating: 4.1,
    numReviews: 54,
  },
  {
    name: "Rompers_Jumpsuits 7",
    description:
      "The Rompers_Jumpsuits 7 is a premium rompers_jumpsuits designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 42912,
    discountPrice: 41612,
    countInStock: 38,
    sku: "SKU-WOM-ROM-007",
    category: "Rompers_Jumpsuits",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Rompers_Jumpsuits 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Rompers_Jumpsuits 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Rompers_Jumpsuits 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Rompers_Jumpsuits 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Rompers_Jumpsuits 7 Additional View",
      },
    ],
    rating: 4.9,
    numReviews: 20,
  },
  {
    name: "Skirt 4",
    description:
      "The Skirt 4 is a premium skirt designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 26014,
    discountPrice: 24512,
    countInStock: 9,
    sku: "SKU-WOM-SKI-004",
    category: "Skirt",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Skirt 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Skirt 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Skirt 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Skirt 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Skirt 4 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 59,
  },
  {
    name: "Shorts 5",
    description:
      "The Shorts 5 is a premium shorts designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 21200,
    discountPrice: 20218,
    countInStock: 6,
    sku: "SKU-MEN-SHO-005",
    category: "Shorts",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Shorts 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Shorts 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Shorts 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Shorts 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Shorts 5 Additional View",
      },
    ],
    rating: 4.5,
    numReviews: 58,
  },
  {
    name: "Denim 14",
    description:
      "The Denim 14 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 78249,
    discountPrice: 76296,
    countInStock: 36,
    sku: "SKU-MEN-DEN-014",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/014_1.jpg",
        altText: "Denim 14 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/014_2.jpg",
        altText: "Denim 14 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/014_3.jpg",
        altText: "Denim 14 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/014_4.jpg",
        altText: "Denim 14 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/014_5.jpg",
        altText: "Denim 14 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 75,
  },
  {
    name: "Sweatshirts_Hoodies 10",
    description:
      "The Sweatshirts_Hoodies 10 is a premium sweatshirts_hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 37605,
    discountPrice: 37191,
    countInStock: 19,
    sku: "SKU-WOM-SWE-010",
    category: "Sweatshirts_Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Sweatshirts_Hoodies 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Sweatshirts_Hoodies 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Sweatshirts_Hoodies 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Sweatshirts_Hoodies 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Sweatshirts_Hoodies 10 Additional View",
      },
    ],
    rating: 4.8,
    numReviews: 44,
  },
  {
    name: "Jackets_Coats 1",
    description:
      "The Jackets_Coats 1 is a premium jackets_coats designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 15575,
    discountPrice: 14701,
    countInStock: 46,
    sku: "SKU-WOM-JAC-001",
    category: "Jackets_Coats",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Jackets_Coats 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Jackets_Coats 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Jackets_Coats 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Jackets_Coats 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Jackets_Coats 1 Additional View",
      },
    ],
    rating: 4.0,
    numReviews: 66,
  },
  {
    name: "Shorts 7",
    description:
      "The Shorts 7 is a premium shorts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 22671,
    discountPrice: 22296,
    countInStock: 36,
    sku: "SKU-WOM-SHO-007",
    category: "Shorts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Shorts 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Shorts 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Shorts 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Shorts 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Shorts 7 Additional View",
      },
    ],
    rating: 3.6,
    numReviews: 58,
  },
  {
    name: "Rompers_Jumpsuits 10",
    description:
      "The Rompers_Jumpsuits 10 is a premium rompers_jumpsuits designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 57212,
    discountPrice: 55939,
    countInStock: 47,
    sku: "SKU-WOM-ROM-010",
    category: "Rompers_Jumpsuits",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Rompers_Jumpsuits 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Rompers_Jumpsuits 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Rompers_Jumpsuits 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Rompers_Jumpsuits 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Rompers_Jumpsuits 10 Additional View",
      },
    ],
    rating: 4.4,
    numReviews: 9,
  },
  {
    name: "Sweatshirts_Hoodies 5",
    description:
      "The Sweatshirts_Hoodies 5 is a premium sweatshirts_hoodies designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 33020,
    discountPrice: 31830,
    countInStock: 45,
    sku: "SKU-MEN-SWE-005",
    category: "Sweatshirts_Hoodies",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Sweatshirts_Hoodies 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Sweatshirts_Hoodies 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Sweatshirts_Hoodies 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Sweatshirts_Hoodies 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Sweatshirts_Hoodies 5 Additional View",
      },
    ],
    rating: 4.6,
    numReviews: 67,
  },
  {
    name: "Leggings 3",
    description:
      "The Leggings 3 is a premium leggings designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 21259,
    discountPrice: 21052,
    countInStock: 7,
    sku: "SKU-WOM-LEG-003",
    category: "Leggings",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Leggings 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Leggings 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Leggings 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Leggings 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Leggings 3 Additional View",
      },
    ],
    rating: 4.7,
    numReviews: 10,
  },
  {
    name: "Skirt 9",
    description:
      "The Skirt 9 is a premium skirt designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 11919,
    discountPrice: 11594,
    countInStock: 41,
    sku: "SKU-WOM-SKI-009",
    category: "Skirt",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Skirt 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Skirt 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Skirt 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Skirt 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Skirt 9 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 39,
  },
  {
    name: "Suiting 9",
    description:
      "The Suiting 9 is a premium suiting designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 127851,
    discountPrice: 125852,
    countInStock: 14,
    sku: "SKU-MEN-SUI-009",
    category: "Suiting",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Suiting 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Suiting 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Suiting 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Suiting 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Suiting 9 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 75,
  },
  {
    name: "Shorts 8",
    description:
      "The Shorts 8 is a premium shorts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 25919,
    discountPrice: 24703,
    countInStock: 30,
    sku: "SKU-WOM-SHO-008",
    category: "Shorts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Shorts 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Shorts 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Shorts 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Shorts 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Shorts 8 Additional View",
      },
    ],
    rating: 4.1,
    numReviews: 73,
  },
  {
    name: "Graphic_Tees 4",
    description:
      "The Graphic_Tees 4 is a premium graphic_tees designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 17688,
    discountPrice: 16113,
    countInStock: 9,
    sku: "SKU-WOM-GRA-004",
    category: "Graphic_Tees",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Graphic_Tees 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Graphic_Tees 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Graphic_Tees 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Graphic_Tees 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Graphic_Tees 4 Additional View",
      },
    ],
    rating: 4.0,
    numReviews: 48,
  },
  {
    name: "Leggings 9",
    description:
      "The Leggings 9 is a premium leggings designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 21477,
    discountPrice: 19712,
    countInStock: 16,
    sku: "SKU-WOM-LEG-009",
    category: "Leggings",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Leggings 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Leggings 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Leggings 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Leggings 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Leggings 9 Additional View",
      },
    ],
    rating: 3.6,
    numReviews: 17,
  },
  {
    name: "Rompers_Jumpsuits 3",
    description:
      "The Rompers_Jumpsuits 3 is a premium rompers_jumpsuits designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 44782,
    discountPrice: 44026,
    countInStock: 12,
    sku: "SKU-WOM-ROM-003",
    category: "Rompers_Jumpsuits",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Rompers_Jumpsuits 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Rompers_Jumpsuits 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Rompers_Jumpsuits 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Rompers_Jumpsuits 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Rompers_Jumpsuits 3 Additional View",
      },
    ],
    rating: 3.6,
    numReviews: 14,
  },
  {
    name: "Sweatshirts_Hoodies 3",
    description:
      "The Sweatshirts_Hoodies 3 is a premium sweatshirts_hoodies designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 61230,
    discountPrice: 59887,
    countInStock: 7,
    sku: "SKU-MEN-SWE-003",
    category: "Sweatshirts_Hoodies",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Sweatshirts_Hoodies 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Sweatshirts_Hoodies 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Sweatshirts_Hoodies 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Sweatshirts_Hoodies 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Sweatshirts_Hoodies 3 Additional View",
      },
    ],
    rating: 4.4,
    numReviews: 54,
  },
  {
    name: "Skirt 10",
    description:
      "The Skirt 10 is a premium skirt designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 12616,
    discountPrice: 11343,
    countInStock: 41,
    sku: "SKU-WOM-SKI-010",
    category: "Skirt",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Skirt 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Skirt 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Skirt 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Skirt 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Skirt 10 Additional View",
      },
    ],
    rating: 4.2,
    numReviews: 26,
  },
  {
    name: "Leggings 8",
    description:
      "The Leggings 8 is a premium leggings designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 26763,
    discountPrice: 25756,
    countInStock: 45,
    sku: "SKU-WOM-LEG-008",
    category: "Leggings",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Leggings 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Leggings 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Leggings 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Leggings 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Leggings 8 Additional View",
      },
    ],
    rating: 4.9,
    numReviews: 65,
  },
  {
    name: "Blouses_Shirts 4",
    description:
      "The Blouses_Shirts 4 is a premium blouses_shirts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 14223,
    discountPrice: 13658,
    countInStock: 49,
    sku: "SKU-WOM-BLO-004",
    category: "Blouses_Shirts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Blouses_Shirts 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Blouses_Shirts 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Blouses_Shirts 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Blouses_Shirts 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Blouses_Shirts 4 Additional View",
      },
    ],
    rating: 4.5,
    numReviews: 75,
  },
  {
    name: "Skirt 5",
    description:
      "The Skirt 5 is a premium skirt designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 15305,
    discountPrice: 14478,
    countInStock: 19,
    sku: "SKU-WOM-SKI-005",
    category: "Skirt",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Skirt 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Skirt 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Skirt 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Skirt 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Skirt 5 Additional View",
      },
    ],
    rating: 3.9,
    numReviews: 62,
  },
  {
    name: "Jeans 2",
    description:
      "The Jeans 2 is a premium jeans designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 22451,
    discountPrice: 21465,
    countInStock: 50,
    sku: "SKU-WOM-JEA-002",
    category: "Jeans",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Jeans 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Jeans 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Jeans 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Jeans 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Jeans 2 Additional View",
      },
    ],
    rating: 3.6,
    numReviews: 65,
  },
  {
    name: "Leggings 4",
    description:
      "The Leggings 4 is a premium leggings designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 31115,
    discountPrice: 30107,
    countInStock: 12,
    sku: "SKU-WOM-LEG-004",
    category: "Leggings",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Leggings 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Leggings 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Leggings 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Leggings 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Leggings 4 Additional View",
      },
    ],
    rating: 4.0,
    numReviews: 42,
  },
  {
    name: "Sweaters 2",
    description:
      "The Sweaters 2 is a premium sweaters designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 22957,
    discountPrice: 21430,
    countInStock: 44,
    sku: "SKU-MEN-SWE-002",
    category: "Sweaters",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Sweaters 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Sweaters 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Sweaters 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Sweaters 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Sweaters 2 Additional View",
      },
    ],
    rating: 4.6,
    numReviews: 12,
  },
  {
    name: "Sweatshirts_Hoodies 2",
    description:
      "The Sweatshirts_Hoodies 2 is a premium sweatshirts_hoodies designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 42404,
    discountPrice: 40487,
    countInStock: 12,
    sku: "SKU-MEN-SWE-002",
    category: "Sweatshirts_Hoodies",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Sweatshirts_Hoodies 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Sweatshirts_Hoodies 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Sweatshirts_Hoodies 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Sweatshirts_Hoodies 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Sweatshirts_Hoodies 2 Additional View",
      },
    ],
    rating: 4.1,
    numReviews: 26,
  },
  {
    name: "Denim 9",
    description:
      "The Denim 9 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 112559,
    discountPrice: 112172,
    countInStock: 37,
    sku: "SKU-MEN-DEN-009",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Denim 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Denim 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Denim 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Denim 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Denim 9 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 18,
  },
  {
    name: "Jeans 10",
    description:
      "The Jeans 10 is a premium jeans designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 22448,
    discountPrice: 21013,
    countInStock: 38,
    sku: "SKU-WOM-JEA-010",
    category: "Jeans",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Jeans 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Jeans 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Jeans 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Jeans 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Jeans 10 Additional View",
      },
    ],
    rating: 4.4,
    numReviews: 23,
  },
  {
    name: "Tees_Tanks 6",
    description:
      "The Tees_Tanks 6 is a premium tees_tanks designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 10795,
    discountPrice: 10436,
    countInStock: 5,
    sku: "SKU-WOM-TEE-006",
    category: "Tees_Tanks",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Tees_Tanks 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Tees_Tanks 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Tees_Tanks 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Tees_Tanks 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Tees_Tanks 6 Additional View",
      },
    ],
    rating: 3.6,
    numReviews: 66,
  },
  {
    name: "Sweatshirts_Hoodies 1",
    description:
      "The Sweatshirts_Hoodies 1 is a premium sweatshirts_hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 40990,
    discountPrice: 40032,
    countInStock: 12,
    sku: "SKU-WOM-SWE-001",
    category: "Sweatshirts_Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Sweatshirts_Hoodies 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Sweatshirts_Hoodies 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Sweatshirts_Hoodies 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Sweatshirts_Hoodies 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Sweatshirts_Hoodies 1 Additional View",
      },
    ],
    rating: 4.7,
    numReviews: 76,
  },
  {
    name: "Tees_Tanks 9",
    description:
      "The Tees_Tanks 9 is a premium tees_tanks designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 14151,
    discountPrice: 12335,
    countInStock: 20,
    sku: "SKU-MEN-TEE-009",
    category: "Tees_Tanks",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Tees_Tanks 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Tees_Tanks 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Tees_Tanks 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Tees_Tanks 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Tees_Tanks 9 Additional View",
      },
    ],
    rating: 4.8,
    numReviews: 37,
  },
  {
    name: "Tees_Tanks 9",
    description:
      "The Tees_Tanks 9 is a premium tees_tanks designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 9756,
    discountPrice: 9177,
    countInStock: 15,
    sku: "SKU-WOM-TEE-009",
    category: "Tees_Tanks",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Tees_Tanks 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Tees_Tanks 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Tees_Tanks 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Tees_Tanks 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Tees_Tanks 9 Additional View",
      },
    ],
    rating: 4.8,
    numReviews: 24,
  },
  {
    name: "Jackets_Coats 8",
    description:
      "The Jackets_Coats 8 is a premium jackets_coats designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 12785,
    discountPrice: 12116,
    countInStock: 38,
    sku: "SKU-WOM-JAC-008",
    category: "Jackets_Coats",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Jackets_Coats 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Jackets_Coats 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Jackets_Coats 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Jackets_Coats 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Jackets_Coats 8 Additional View",
      },
    ],
    rating: 4.7,
    numReviews: 22,
  },
  {
    name: "Sweatshirts_Hoodies 4",
    description:
      "The Sweatshirts_Hoodies 4 is a premium sweatshirts_hoodies designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 70526,
    discountPrice: 68605,
    countInStock: 32,
    sku: "SKU-MEN-SWE-004",
    category: "Sweatshirts_Hoodies",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Sweatshirts_Hoodies 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Sweatshirts_Hoodies 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Sweatshirts_Hoodies 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Sweatshirts_Hoodies 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Sweatshirts_Hoodies 4 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 79,
  },
  {
    name: "Suiting 4",
    description:
      "The Suiting 4 is a premium suiting designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 141236,
    discountPrice: 140678,
    countInStock: 22,
    sku: "SKU-MEN-SUI-004",
    category: "Suiting",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Suiting 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Suiting 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Suiting 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Suiting 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Suiting 4 Additional View",
      },
    ],
    rating: 4.5,
    numReviews: 73,
  },
  {
    name: "Sweatshirts_Hoodies 10",
    description:
      "The Sweatshirts_Hoodies 10 is a premium sweatshirts_hoodies designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 40477,
    discountPrice: 39546,
    countInStock: 39,
    sku: "SKU-MEN-SWE-010",
    category: "Sweatshirts_Hoodies",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Sweatshirts_Hoodies 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Sweatshirts_Hoodies 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Sweatshirts_Hoodies 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Sweatshirts_Hoodies 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Sweatshirts_Hoodies 10 Additional View",
      },
    ],
    rating: 4.4,
    numReviews: 20,
  },
  {
    name: "Tees_Tanks 10",
    description:
      "The Tees_Tanks 10 is a premium tees_tanks designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 11791,
    discountPrice: 9925,
    countInStock: 32,
    sku: "SKU-WOM-TEE-010",
    category: "Tees_Tanks",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Tees_Tanks 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Tees_Tanks 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Tees_Tanks 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Tees_Tanks 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Tees_Tanks 10 Additional View",
      },
    ],
    rating: 4.4,
    numReviews: 60,
  },
  {
    name: "Denim 12",
    description:
      "The Denim 12 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 71595,
    discountPrice: 70056,
    countInStock: 38,
    sku: "SKU-MEN-DEN-012",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/012_1.jpg",
        altText: "Denim 12 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/012_2.jpg",
        altText: "Denim 12 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/012_3.jpg",
        altText: "Denim 12 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/012_4.jpg",
        altText: "Denim 12 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/012_5.jpg",
        altText: "Denim 12 Additional View",
      },
    ],
    rating: 4.8,
    numReviews: 78,
  },
  {
    name: "Jackets_Coats 7",
    description:
      "The Jackets_Coats 7 is a premium jackets_coats designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 16841,
    discountPrice: 15990,
    countInStock: 37,
    sku: "SKU-WOM-JAC-007",
    category: "Jackets_Coats",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Jackets_Coats 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Jackets_Coats 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Jackets_Coats 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Jackets_Coats 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Jackets_Coats 7 Additional View",
      },
    ],
    rating: 3.9,
    numReviews: 18,
  },
  {
    name: "Tees_Tanks 2",
    description:
      "The Tees_Tanks 2 is a premium tees_tanks designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 8549,
    discountPrice: 7895,
    countInStock: 41,
    sku: "SKU-WOM-TEE-002",
    category: "Tees_Tanks",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Tees_Tanks 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Tees_Tanks 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Tees_Tanks 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Tees_Tanks 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Tees_Tanks 2 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 64,
  },
  {
    name: "Tees_Tanks 7",
    description:
      "The Tees_Tanks 7 is a premium tees_tanks designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 28374,
    discountPrice: 27040,
    countInStock: 12,
    sku: "SKU-MEN-TEE-007",
    category: "Tees_Tanks",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Tees_Tanks 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Tees_Tanks 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Tees_Tanks 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Tees_Tanks 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Tees_Tanks 7 Additional View",
      },
    ],
    rating: 4.2,
    numReviews: 32,
  },
  {
    name: "Tees_Tanks 1",
    description:
      "The Tees_Tanks 1 is a premium tees_tanks designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 6554,
    discountPrice: 5474,
    countInStock: 28,
    sku: "SKU-WOM-TEE-001",
    category: "Tees_Tanks",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Tees_Tanks 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Tees_Tanks 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Tees_Tanks 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Tees_Tanks 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Tees_Tanks 1 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 70,
  },
  {
    name: "Hoodies 4",
    description:
      "The Hoodies 4 is a premium hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 17401,
    discountPrice: 15852,
    countInStock: 13,
    sku: "SKU-WOM-HOO-004",
    category: "Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Hoodies 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Hoodies 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Hoodies 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Hoodies 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Hoodies 4 Additional View",
      },
    ],
    rating: 4.7,
    numReviews: 26,
  },
  {
    name: "Shorts 5",
    description:
      "The Shorts 5 is a premium shorts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 22719,
    discountPrice: 21985,
    countInStock: 23,
    sku: "SKU-WOM-SHO-005",
    category: "Shorts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Shorts 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Shorts 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Shorts 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Shorts 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Shorts 5 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 75,
  },
  {
    name: "Hoodies 7",
    description:
      "The Hoodies 7 is a premium hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 28988,
    discountPrice: 27934,
    countInStock: 49,
    sku: "SKU-WOM-HOO-007",
    category: "Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Hoodies 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Hoodies 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Hoodies 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Hoodies 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Hoodies 7 Additional View",
      },
    ],
    rating: 4.6,
    numReviews: 6,
  },
  {
    name: "Hoodies 9",
    description:
      "The Hoodies 9 is a premium hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 29988,
    discountPrice: 28705,
    countInStock: 11,
    sku: "SKU-WOM-HOO-009",
    category: "Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Hoodies 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Hoodies 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Hoodies 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Hoodies 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Hoodies 9 Additional View",
      },
    ],
    rating: 5.0,
    numReviews: 67,
  },
  {
    name: "Jackets_Coats 3",
    description:
      "The Jackets_Coats 3 is a premium jackets_coats designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 19926,
    discountPrice: 19589,
    countInStock: 41,
    sku: "SKU-WOM-JAC-003",
    category: "Jackets_Coats",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Jackets_Coats 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Jackets_Coats 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Jackets_Coats 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Jackets_Coats 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Jackets_Coats 3 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 59,
  },
  {
    name: "Shorts 4",
    description:
      "The Shorts 4 is a premium shorts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 10438,
    discountPrice: 9739,
    countInStock: 45,
    sku: "SKU-WOM-SHO-004",
    category: "Shorts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Shorts 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Shorts 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Shorts 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Shorts 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Shorts 4 Additional View",
      },
    ],
    rating: 4.0,
    numReviews: 31,
  },
  {
    name: "Hoodies 2",
    description:
      "The Hoodies 2 is a premium hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 20796,
    discountPrice: 18901,
    countInStock: 22,
    sku: "SKU-WOM-HOO-002",
    category: "Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Hoodies 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Hoodies 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Hoodies 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Hoodies 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Hoodies 2 Additional View",
      },
    ],
    rating: 3.5,
    numReviews: 31,
  },
  {
    name: "Rompers_Jumpsuits 4",
    description:
      "The Rompers_Jumpsuits 4 is a premium rompers_jumpsuits designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 40971,
    discountPrice: 40182,
    countInStock: 17,
    sku: "SKU-WOM-ROM-004",
    category: "Rompers_Jumpsuits",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Rompers_Jumpsuits 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Rompers_Jumpsuits 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Rompers_Jumpsuits 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Rompers_Jumpsuits 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Rompers_Jumpsuits 4 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 38,
  },
  {
    name: "Shorts 2",
    description:
      "The Shorts 2 is a premium shorts designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 29700,
    discountPrice: 28891,
    countInStock: 27,
    sku: "SKU-MEN-SHO-002",
    category: "Shorts",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Shorts 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Shorts 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Shorts 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Shorts 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Shorts 2 Additional View",
      },
    ],
    rating: 4.4,
    numReviews: 67,
  },
  {
    name: "Tees_Tanks 8",
    description:
      "The Tees_Tanks 8 is a premium tees_tanks designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 18180,
    discountPrice: 17213,
    countInStock: 19,
    sku: "SKU-MEN-TEE-008",
    category: "Tees_Tanks",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Tees_Tanks 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Tees_Tanks 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Tees_Tanks 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Tees_Tanks 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Tees_Tanks 8 Additional View",
      },
    ],
    rating: 4.7,
    numReviews: 53,
  },
  {
    name: "Shorts 8",
    description:
      "The Shorts 8 is a premium shorts designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 20591,
    discountPrice: 18609,
    countInStock: 21,
    sku: "SKU-MEN-SHO-008",
    category: "Shorts",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Shorts 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Shorts 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Shorts 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Shorts 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Shorts 8 Additional View",
      },
    ],
    rating: 3.5,
    numReviews: 38,
  },
  {
    name: "Jeans 7",
    description:
      "The Jeans 7 is a premium jeans designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 32829,
    discountPrice: 32323,
    countInStock: 20,
    sku: "SKU-WOM-JEA-007",
    category: "Jeans",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Jeans 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Jeans 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Jeans 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Jeans 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Jeans 7 Additional View",
      },
    ],
    rating: 4.8,
    numReviews: 64,
  },
  {
    name: "Leggings 5",
    description:
      "The Leggings 5 is a premium leggings designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 35369,
    discountPrice: 33496,
    countInStock: 38,
    sku: "SKU-WOM-LEG-005",
    category: "Leggings",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Leggings 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Leggings 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Leggings 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Leggings 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Leggings 5 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 14,
  },
  {
    name: "Jeans 1",
    description:
      "The Jeans 1 is a premium jeans designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 46144,
    discountPrice: 45178,
    countInStock: 24,
    sku: "SKU-WOM-JEA-001",
    category: "Jeans",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Jeans 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Jeans 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Jeans 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Jeans 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Jeans 1 Additional View",
      },
    ],
    rating: 3.6,
    numReviews: 43,
  },
  {
    name: "Suiting 5",
    description:
      "The Suiting 5 is a premium suiting designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 140579,
    discountPrice: 138877,
    countInStock: 22,
    sku: "SKU-MEN-SUI-005",
    category: "Suiting",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Suiting 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Suiting 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Suiting 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Suiting 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Suiting 5 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 73,
  },
  {
    name: "Graphic_Tees 6",
    description:
      "The Graphic_Tees 6 is a premium graphic_tees designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 18539,
    discountPrice: 17333,
    countInStock: 32,
    sku: "SKU-WOM-GRA-006",
    category: "Graphic_Tees",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Graphic_Tees 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Graphic_Tees 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Graphic_Tees 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Graphic_Tees 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Graphic_Tees 6 Additional View",
      },
    ],
    rating: 4.1,
    numReviews: 31,
  },
  {
    name: "Denim 4",
    description:
      "The Denim 4 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 122735,
    discountPrice: 121333,
    countInStock: 5,
    sku: "SKU-MEN-DEN-004",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Denim 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Denim 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Denim 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Denim 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Denim 4 Additional View",
      },
    ],
    rating: 3.5,
    numReviews: 70,
  },
  {
    name: "Blouses_Shirts 10",
    description:
      "The Blouses_Shirts 10 is a premium blouses_shirts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 10905,
    discountPrice: 10673,
    countInStock: 39,
    sku: "SKU-WOM-BLO-010",
    category: "Blouses_Shirts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Blouses_Shirts 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Blouses_Shirts 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Blouses_Shirts 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Blouses_Shirts 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Blouses_Shirts 10 Additional View",
      },
    ],
    rating: 3.9,
    numReviews: 17,
  },
  {
    name: "Tees_Tanks 4",
    description:
      "The Tees_Tanks 4 is a premium tees_tanks designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 22281,
    discountPrice: 20431,
    countInStock: 20,
    sku: "SKU-MEN-TEE-004",
    category: "Tees_Tanks",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Tees_Tanks 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Tees_Tanks 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Tees_Tanks 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Tees_Tanks 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Tees_Tanks 4 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 33,
  },
  {
    name: "Suiting 3",
    description:
      "The Suiting 3 is a premium suiting designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 93150,
    discountPrice: 91190,
    countInStock: 23,
    sku: "SKU-MEN-SUI-003",
    category: "Suiting",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Suiting 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Suiting 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Suiting 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Suiting 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Suiting 3 Additional View",
      },
    ],
    rating: 4.4,
    numReviews: 69,
  },
  {
    name: "Shorts 3",
    description:
      "The Shorts 3 is a premium shorts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 16787,
    discountPrice: 15326,
    countInStock: 33,
    sku: "SKU-WOM-SHO-003",
    category: "Shorts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Shorts 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Shorts 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Shorts 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Shorts 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Shorts 3 Additional View",
      },
    ],
    rating: 4.7,
    numReviews: 52,
  },
  {
    name: "Jeans 9",
    description:
      "The Jeans 9 is a premium jeans designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 24765,
    discountPrice: 23369,
    countInStock: 30,
    sku: "SKU-WOM-JEA-009",
    category: "Jeans",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Jeans 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Jeans 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Jeans 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Jeans 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Jeans 9 Additional View",
      },
    ],
    rating: 4.0,
    numReviews: 29,
  },
  {
    name: "Denim 8",
    description:
      "The Denim 8 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 46791,
    discountPrice: 46286,
    countInStock: 41,
    sku: "SKU-MEN-DEN-008",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Denim 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Denim 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Denim 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Denim 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Denim 8 Additional View",
      },
    ],
    rating: 3.9,
    numReviews: 15,
  },
  {
    name: "Jeans 8",
    description:
      "The Jeans 8 is a premium jeans designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 47609,
    discountPrice: 46970,
    countInStock: 50,
    sku: "SKU-WOM-JEA-008",
    category: "Jeans",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Jeans 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Jeans 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Jeans 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Jeans 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Jeans 8 Additional View",
      },
    ],
    rating: 3.9,
    numReviews: 21,
  },
  {
    name: "Tees_Tanks 10",
    description:
      "The Tees_Tanks 10 is a premium tees_tanks designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 36166,
    discountPrice: 34948,
    countInStock: 13,
    sku: "SKU-MEN-TEE-010",
    category: "Tees_Tanks",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Tees_Tanks 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Tees_Tanks 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Tees_Tanks 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Tees_Tanks 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Tees_Tanks 10 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 13,
  },
  {
    name: "Graphic_Tees 8",
    description:
      "The Graphic_Tees 8 is a premium graphic_tees designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 9672,
    discountPrice: 8257,
    countInStock: 37,
    sku: "SKU-WOM-GRA-008",
    category: "Graphic_Tees",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Graphic_Tees 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Graphic_Tees 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Graphic_Tees 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Graphic_Tees 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Graphic_Tees 8 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 11,
  },
  {
    name: "Shorts 7",
    description:
      "The Shorts 7 is a premium shorts designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 33412,
    discountPrice: 31790,
    countInStock: 16,
    sku: "SKU-MEN-SHO-007",
    category: "Shorts",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Shorts 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Shorts 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Shorts 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Shorts 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Shorts 7 Additional View",
      },
    ],
    rating: 3.9,
    numReviews: 63,
  },
  {
    name: "Denim 11",
    description:
      "The Denim 11 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 57952,
    discountPrice: 56692,
    countInStock: 43,
    sku: "SKU-MEN-DEN-011",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/011_1.jpg",
        altText: "Denim 11 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/011_2.jpg",
        altText: "Denim 11 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/011_3.jpg",
        altText: "Denim 11 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/011_4.jpg",
        altText: "Denim 11 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/011_5.jpg",
        altText: "Denim 11 Additional View",
      },
    ],
    rating: 3.9,
    numReviews: 52,
  },
  {
    name: "Suiting 6",
    description:
      "The Suiting 6 is a premium suiting designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 71640,
    discountPrice: 70967,
    countInStock: 16,
    sku: "SKU-MEN-SUI-006",
    category: "Suiting",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Suiting 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Suiting 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Suiting 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Suiting 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Suiting 6 Additional View",
      },
    ],
    rating: 3.9,
    numReviews: 73,
  },
  {
    name: "Denim 10",
    description:
      "The Denim 10 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 78766,
    discountPrice: 78406,
    countInStock: 34,
    sku: "SKU-MEN-DEN-010",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Denim 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Denim 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Denim 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Denim 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Denim 10 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 11,
  },
  {
    name: "Tees_Tanks 1",
    description:
      "The Tees_Tanks 1 is a premium tees_tanks designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 3263,
    discountPrice: 2718,
    countInStock: 45,
    sku: "SKU-MEN-TEE-001",
    category: "Tees_Tanks",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Tees_Tanks 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Tees_Tanks 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Tees_Tanks 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Tees_Tanks 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Tees_Tanks 1 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 39,
  },
  {
    name: "Shorts 6",
    description:
      "The Shorts 6 is a premium shorts designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 34539,
    discountPrice: 33594,
    countInStock: 42,
    sku: "SKU-MEN-SHO-006",
    category: "Shorts",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Shorts 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Shorts 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Shorts 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Shorts 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Shorts 6 Additional View",
      },
    ],
    rating: 4.2,
    numReviews: 47,
  },
  {
    name: "Sweaters 8",
    description:
      "The Sweaters 8 is a premium sweaters designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 25693,
    discountPrice: 24277,
    countInStock: 13,
    sku: "SKU-MEN-SWE-008",
    category: "Sweaters",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Sweaters 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Sweaters 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Sweaters 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Sweaters 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Sweaters 8 Additional View",
      },
    ],
    rating: 4.1,
    numReviews: 46,
  },
  {
    name: "Leggings 1",
    description:
      "The Leggings 1 is a premium leggings designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 36385,
    discountPrice: 34517,
    countInStock: 50,
    sku: "SKU-WOM-LEG-001",
    category: "Leggings",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Leggings 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Leggings 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Leggings 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Leggings 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Leggings 1 Additional View",
      },
    ],
    rating: 4.1,
    numReviews: 44,
  },
  {
    name: "Shorts 1",
    description:
      "The Shorts 1 is a premium shorts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 25746,
    discountPrice: 23766,
    countInStock: 41,
    sku: "SKU-WOM-SHO-001",
    category: "Shorts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Shorts 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Shorts 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Shorts 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Shorts 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Shorts 1 Additional View",
      },
    ],
    rating: 4.0,
    numReviews: 42,
  },
  {
    name: "Graphic_Tees 10",
    description:
      "The Graphic_Tees 10 is a premium graphic_tees designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 18545,
    discountPrice: 17719,
    countInStock: 50,
    sku: "SKU-WOM-GRA-010",
    category: "Graphic_Tees",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Graphic_Tees 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Graphic_Tees 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Graphic_Tees 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Graphic_Tees 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Graphic_Tees 10 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 55,
  },
  {
    name: "Tees_Tanks 7",
    description:
      "The Tees_Tanks 7 is a premium tees_tanks designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 6367,
    discountPrice: 4759,
    countInStock: 15,
    sku: "SKU-WOM-TEE-007",
    category: "Tees_Tanks",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Tees_Tanks 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Tees_Tanks 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Tees_Tanks 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Tees_Tanks 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Tees_Tanks 7 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 66,
  },
  {
    name: "Leggings 6",
    description:
      "The Leggings 6 is a premium leggings designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 32513,
    discountPrice: 31428,
    countInStock: 40,
    sku: "SKU-WOM-LEG-006",
    category: "Leggings",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Leggings 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Leggings 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Leggings 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Leggings 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Leggings 6 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 27,
  },
  {
    name: "Hoodies 6",
    description:
      "The Hoodies 6 is a premium hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 24494,
    discountPrice: 23872,
    countInStock: 11,
    sku: "SKU-WOM-HOO-006",
    category: "Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Hoodies 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Hoodies 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Hoodies 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Hoodies 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Hoodies 6 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 45,
  },
  {
    name: "Jackets_Coats 6",
    description:
      "The Jackets_Coats 6 is a premium jackets_coats designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 17130,
    discountPrice: 16368,
    countInStock: 10,
    sku: "SKU-WOM-JAC-006",
    category: "Jackets_Coats",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Jackets_Coats 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Jackets_Coats 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Jackets_Coats 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Jackets_Coats 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Jackets_Coats 6 Additional View",
      },
    ],
    rating: 4.8,
    numReviews: 38,
  },
  {
    name: "Graphic_Tees 2",
    description:
      "The Graphic_Tees 2 is a premium graphic_tees designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 18746,
    discountPrice: 16807,
    countInStock: 21,
    sku: "SKU-WOM-GRA-002",
    category: "Graphic_Tees",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Graphic_Tees 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Graphic_Tees 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Graphic_Tees 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Graphic_Tees 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Graphic_Tees 2 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 25,
  },
  {
    name: "Sweaters 9",
    description:
      "The Sweaters 9 is a premium sweaters designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 13839,
    discountPrice: 11877,
    countInStock: 23,
    sku: "SKU-MEN-SWE-009",
    category: "Sweaters",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Sweaters 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Sweaters 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Sweaters 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Sweaters 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Sweaters 9 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 80,
  },
  {
    name: "Shorts 1",
    description:
      "The Shorts 1 is a premium shorts designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 28631,
    discountPrice: 27522,
    countInStock: 39,
    sku: "SKU-MEN-SHO-001",
    category: "Shorts",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Shorts 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Shorts 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Shorts 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Shorts 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Shorts 1 Additional View",
      },
    ],
    rating: 4.1,
    numReviews: 5,
  },
  {
    name: "Shorts 4",
    description:
      "The Shorts 4 is a premium shorts designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 30901,
    discountPrice: 29994,
    countInStock: 43,
    sku: "SKU-MEN-SHO-004",
    category: "Shorts",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Shorts 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Shorts 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Shorts 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Shorts 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Shorts 4 Additional View",
      },
    ],
    rating: 4.9,
    numReviews: 14,
  },
  {
    name: "Blouses_Shirts 1",
    description:
      "The Blouses_Shirts 1 is a premium blouses_shirts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 7576,
    discountPrice: 6665,
    countInStock: 9,
    sku: "SKU-WOM-BLO-001",
    category: "Blouses_Shirts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Blouses_Shirts 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Blouses_Shirts 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Blouses_Shirts 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Blouses_Shirts 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Blouses_Shirts 1 Additional View",
      },
    ],
    rating: 4.9,
    numReviews: 56,
  },
  {
    name: "Denim 5",
    description:
      "The Denim 5 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 92258,
    discountPrice: 91288,
    countInStock: 15,
    sku: "SKU-MEN-DEN-005",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Denim 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Denim 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Denim 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Denim 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Denim 5 Additional View",
      },
    ],
    rating: 5.0,
    numReviews: 9,
  },
  {
    name: "Sweatshirts_Hoodies 7",
    description:
      "The Sweatshirts_Hoodies 7 is a premium sweatshirts_hoodies designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 73067,
    discountPrice: 71496,
    countInStock: 24,
    sku: "SKU-MEN-SWE-007",
    category: "Sweatshirts_Hoodies",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Sweatshirts_Hoodies 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Sweatshirts_Hoodies 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Sweatshirts_Hoodies 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Sweatshirts_Hoodies 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Sweatshirts_Hoodies 7 Additional View",
      },
    ],
    rating: 4.2,
    numReviews: 45,
  },
  {
    name: "Graphic_Tees 7",
    description:
      "The Graphic_Tees 7 is a premium graphic_tees designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 10311,
    discountPrice: 9236,
    countInStock: 10,
    sku: "SKU-WOM-GRA-007",
    category: "Graphic_Tees",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Graphic_Tees 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Graphic_Tees 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Graphic_Tees 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Graphic_Tees 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Graphic_Tees 7 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 51,
  },
  {
    name: "Blouses_Shirts 2",
    description:
      "The Blouses_Shirts 2 is a premium blouses_shirts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 12622,
    discountPrice: 11657,
    countInStock: 47,
    sku: "SKU-WOM-BLO-002",
    category: "Blouses_Shirts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Blouses_Shirts 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Blouses_Shirts 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Blouses_Shirts 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Blouses_Shirts 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Blouses_Shirts 2 Additional View",
      },
    ],
    rating: 4.5,
    numReviews: 52,
  },
  {
    name: "Sweatshirts_Hoodies 9",
    description:
      "The Sweatshirts_Hoodies 9 is a premium sweatshirts_hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 28824,
    discountPrice: 27390,
    countInStock: 27,
    sku: "SKU-WOM-SWE-009",
    category: "Sweatshirts_Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Sweatshirts_Hoodies 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Sweatshirts_Hoodies 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Sweatshirts_Hoodies 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Sweatshirts_Hoodies 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Sweatshirts_Hoodies 9 Additional View",
      },
    ],
    rating: 4.1,
    numReviews: 69,
  },
  {
    name: "Jeans 6",
    description:
      "The Jeans 6 is a premium jeans designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 42141,
    discountPrice: 41520,
    countInStock: 42,
    sku: "SKU-WOM-JEA-006",
    category: "Jeans",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Jeans 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Jeans 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Jeans 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Jeans 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Jeans 6 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 14,
  },
  {
    name: "Sweatshirts_Hoodies 2",
    description:
      "The Sweatshirts_Hoodies 2 is a premium sweatshirts_hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 28364,
    discountPrice: 26485,
    countInStock: 32,
    sku: "SKU-WOM-SWE-002",
    category: "Sweatshirts_Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Sweatshirts_Hoodies 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Sweatshirts_Hoodies 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Sweatshirts_Hoodies 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Sweatshirts_Hoodies 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Sweatshirts_Hoodies 2 Additional View",
      },
    ],
    rating: 4.9,
    numReviews: 44,
  },
  {
    name: "Sweaters 3",
    description:
      "The Sweaters 3 is a premium sweaters designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 7433,
    discountPrice: 6040,
    countInStock: 39,
    sku: "SKU-MEN-SWE-003",
    category: "Sweaters",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Sweaters 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Sweaters 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Sweaters 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Sweaters 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Sweaters 3 Additional View",
      },
    ],
    rating: 4.7,
    numReviews: 41,
  },
  {
    name: "Skirt 8",
    description:
      "The Skirt 8 is a premium skirt designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 17092,
    discountPrice: 15933,
    countInStock: 17,
    sku: "SKU-WOM-SKI-008",
    category: "Skirt",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Skirt 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Skirt 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Skirt 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Skirt 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Skirt 8 Additional View",
      },
    ],
    rating: 4.0,
    numReviews: 43,
  },
  {
    name: "Blouses_Shirts 6",
    description:
      "The Blouses_Shirts 6 is a premium blouses_shirts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 11114,
    discountPrice: 9315,
    countInStock: 40,
    sku: "SKU-WOM-BLO-006",
    category: "Blouses_Shirts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Blouses_Shirts 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Blouses_Shirts 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Blouses_Shirts 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Blouses_Shirts 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Blouses_Shirts 6 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 10,
  },
  {
    name: "Leggings 10",
    description:
      "The Leggings 10 is a premium leggings designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 35574,
    discountPrice: 34061,
    countInStock: 47,
    sku: "SKU-WOM-LEG-010",
    category: "Leggings",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Leggings 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Leggings 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Leggings 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Leggings 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Leggings 10 Additional View",
      },
    ],
    rating: 4.2,
    numReviews: 22,
  },
  {
    name: "Suiting 7",
    description:
      "The Suiting 7 is a premium suiting designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 82517,
    discountPrice: 82198,
    countInStock: 8,
    sku: "SKU-MEN-SUI-007",
    category: "Suiting",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Suiting 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Suiting 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Suiting 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Suiting 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Suiting 7 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 45,
  },
  {
    name: "Sweatshirts_Hoodies 5",
    description:
      "The Sweatshirts_Hoodies 5 is a premium sweatshirts_hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 34398,
    discountPrice: 33890,
    countInStock: 11,
    sku: "SKU-WOM-SWE-005",
    category: "Sweatshirts_Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Sweatshirts_Hoodies 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Sweatshirts_Hoodies 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Sweatshirts_Hoodies 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Sweatshirts_Hoodies 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Sweatshirts_Hoodies 5 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 71,
  },
  {
    name: "Sweatshirts_Hoodies 4",
    description:
      "The Sweatshirts_Hoodies 4 is a premium sweatshirts_hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 23282,
    discountPrice: 22807,
    countInStock: 15,
    sku: "SKU-WOM-SWE-004",
    category: "Sweatshirts_Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Sweatshirts_Hoodies 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Sweatshirts_Hoodies 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Sweatshirts_Hoodies 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Sweatshirts_Hoodies 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Sweatshirts_Hoodies 4 Additional View",
      },
    ],
    rating: 4.5,
    numReviews: 74,
  },
  {
    name: "Rompers_Jumpsuits 5",
    description:
      "The Rompers_Jumpsuits 5 is a premium rompers_jumpsuits designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 47246,
    discountPrice: 46726,
    countInStock: 8,
    sku: "SKU-WOM-ROM-005",
    category: "Rompers_Jumpsuits",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Rompers_Jumpsuits 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Rompers_Jumpsuits 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Rompers_Jumpsuits 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Rompers_Jumpsuits 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Rompers_Jumpsuits 5 Additional View",
      },
    ],
    rating: 4.5,
    numReviews: 9,
  },
  {
    name: "Jeans 4",
    description:
      "The Jeans 4 is a premium jeans designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 37067,
    discountPrice: 36133,
    countInStock: 8,
    sku: "SKU-WOM-JEA-004",
    category: "Jeans",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Jeans 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Jeans 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Jeans 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Jeans 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Jeans 4 Additional View",
      },
    ],
    rating: 4.1,
    numReviews: 60,
  },
  {
    name: "Sweatshirts_Hoodies 7",
    description:
      "The Sweatshirts_Hoodies 7 is a premium sweatshirts_hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 32892,
    discountPrice: 31378,
    countInStock: 37,
    sku: "SKU-WOM-SWE-007",
    category: "Sweatshirts_Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Sweatshirts_Hoodies 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Sweatshirts_Hoodies 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Sweatshirts_Hoodies 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Sweatshirts_Hoodies 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Sweatshirts_Hoodies 7 Additional View",
      },
    ],
    rating: 3.5,
    numReviews: 28,
  },
  {
    name: "Blouses_Shirts 7",
    description:
      "The Blouses_Shirts 7 is a premium blouses_shirts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 5870,
    discountPrice: 5218,
    countInStock: 25,
    sku: "SKU-WOM-BLO-007",
    category: "Blouses_Shirts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Blouses_Shirts 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Blouses_Shirts 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Blouses_Shirts 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Blouses_Shirts 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Blouses_Shirts 7 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 41,
  },
  {
    name: "Blouses_Shirts 8",
    description:
      "The Blouses_Shirts 8 is a premium blouses_shirts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 5630,
    discountPrice: 5289,
    countInStock: 46,
    sku: "SKU-WOM-BLO-008",
    category: "Blouses_Shirts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Blouses_Shirts 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Blouses_Shirts 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Blouses_Shirts 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Blouses_Shirts 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Blouses_Shirts 8 Additional View",
      },
    ],
    rating: 4.1,
    numReviews: 78,
  },
  {
    name: "Hoodies 8",
    description:
      "The Hoodies 8 is a premium hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 21371,
    discountPrice: 20496,
    countInStock: 32,
    sku: "SKU-WOM-HOO-008",
    category: "Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Hoodies 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Hoodies 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Hoodies 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Hoodies 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Hoodies 8 Additional View",
      },
    ],
    rating: 4.0,
    numReviews: 48,
  },
  {
    name: "Rompers_Jumpsuits 9",
    description:
      "The Rompers_Jumpsuits 9 is a premium rompers_jumpsuits designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 31602,
    discountPrice: 30983,
    countInStock: 43,
    sku: "SKU-WOM-ROM-009",
    category: "Rompers_Jumpsuits",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Rompers_Jumpsuits 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Rompers_Jumpsuits 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Rompers_Jumpsuits 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Rompers_Jumpsuits 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Rompers_Jumpsuits 9 Additional View",
      },
    ],
    rating: 4.5,
    numReviews: 47,
  },
  {
    name: "Skirt 1",
    description:
      "The Skirt 1 is a premium skirt designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 15583,
    discountPrice: 13805,
    countInStock: 47,
    sku: "SKU-WOM-SKI-001",
    category: "Skirt",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Skirt 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Skirt 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Skirt 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Skirt 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Skirt 1 Additional View",
      },
    ],
    rating: 4.6,
    numReviews: 6,
  },
  {
    name: "Sweatshirts_Hoodies 1",
    description:
      "The Sweatshirts_Hoodies 1 is a premium sweatshirts_hoodies designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 60818,
    discountPrice: 59228,
    countInStock: 7,
    sku: "SKU-MEN-SWE-001",
    category: "Sweatshirts_Hoodies",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Sweatshirts_Hoodies 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Sweatshirts_Hoodies 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Sweatshirts_Hoodies 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Sweatshirts_Hoodies 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Sweatshirts_Hoodies 1 Additional View",
      },
    ],
    rating: 4.2,
    numReviews: 55,
  },
  {
    name: "Graphic_Tees 9",
    description:
      "The Graphic_Tees 9 is a premium graphic_tees designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 13860,
    discountPrice: 12110,
    countInStock: 19,
    sku: "SKU-WOM-GRA-009",
    category: "Graphic_Tees",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Graphic_Tees 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Graphic_Tees 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Graphic_Tees 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Graphic_Tees 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Graphic_Tees 9 Additional View",
      },
    ],
    rating: 4.6,
    numReviews: 42,
  },
  {
    name: "Rompers_Jumpsuits 6",
    description:
      "The Rompers_Jumpsuits 6 is a premium rompers_jumpsuits designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 39165,
    discountPrice: 37449,
    countInStock: 17,
    sku: "SKU-WOM-ROM-006",
    category: "Rompers_Jumpsuits",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Rompers_Jumpsuits 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Rompers_Jumpsuits 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Rompers_Jumpsuits 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Rompers_Jumpsuits 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Rompers_Jumpsuits 6 Additional View",
      },
    ],
    rating: 4.6,
    numReviews: 46,
  },
  {
    name: "Shorts 9",
    description:
      "The Shorts 9 is a premium shorts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 13494,
    discountPrice: 11647,
    countInStock: 41,
    sku: "SKU-WOM-SHO-009",
    category: "Shorts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Shorts 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Shorts 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Shorts 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Shorts 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Shorts 9 Additional View",
      },
    ],
    rating: 4.6,
    numReviews: 66,
  },
  {
    name: "Sweatshirts_Hoodies 8",
    description:
      "The Sweatshirts_Hoodies 8 is a premium sweatshirts_hoodies designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 49199,
    discountPrice: 47626,
    countInStock: 47,
    sku: "SKU-MEN-SWE-008",
    category: "Sweatshirts_Hoodies",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Sweatshirts_Hoodies 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Sweatshirts_Hoodies 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Sweatshirts_Hoodies 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Sweatshirts_Hoodies 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Sweatshirts_Hoodies 8 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 33,
  },
  {
    name: "Sweatshirts_Hoodies 6",
    description:
      "The Sweatshirts_Hoodies 6 is a premium sweatshirts_hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 30495,
    discountPrice: 29698,
    countInStock: 10,
    sku: "SKU-WOM-SWE-006",
    category: "Sweatshirts_Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Sweatshirts_Hoodies 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Sweatshirts_Hoodies 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Sweatshirts_Hoodies 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Sweatshirts_Hoodies 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Sweatshirts_Hoodies 6 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 59,
  },
  {
    name: "Tees_Tanks 8",
    description:
      "The Tees_Tanks 8 is a premium tees_tanks designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 6270,
    discountPrice: 4820,
    countInStock: 46,
    sku: "SKU-WOM-TEE-008",
    category: "Tees_Tanks",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Tees_Tanks 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Tees_Tanks 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Tees_Tanks 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Tees_Tanks 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Tees_Tanks 8 Additional View",
      },
    ],
    rating: 4.9,
    numReviews: 40,
  },
  {
    name: "Jeans 3",
    description:
      "The Jeans 3 is a premium jeans designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 41230,
    discountPrice: 39375,
    countInStock: 9,
    sku: "SKU-WOM-JEA-003",
    category: "Jeans",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Jeans 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Jeans 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Jeans 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Jeans 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Jeans 3 Additional View",
      },
    ],
    rating: 4.6,
    numReviews: 30,
  },
  {
    name: "Tees_Tanks 6",
    description:
      "The Tees_Tanks 6 is a premium tees_tanks designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 30718,
    discountPrice: 29288,
    countInStock: 14,
    sku: "SKU-MEN-TEE-006",
    category: "Tees_Tanks",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Tees_Tanks 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Tees_Tanks 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Tees_Tanks 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Tees_Tanks 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Tees_Tanks 6 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 75,
  },
  {
    name: "Shorts 10",
    description:
      "The Shorts 10 is a premium shorts designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 33438,
    discountPrice: 32090,
    countInStock: 13,
    sku: "SKU-MEN-SHO-010",
    category: "Shorts",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Shorts 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Shorts 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Shorts 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Shorts 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Shorts 10 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 18,
  },
  {
    name: "Hoodies 1",
    description:
      "The Hoodies 1 is a premium hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 21714,
    discountPrice: 20628,
    countInStock: 10,
    sku: "SKU-WOM-HOO-001",
    category: "Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Hoodies 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Hoodies 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Hoodies 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Hoodies 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Hoodies 1 Additional View",
      },
    ],
    rating: 3.5,
    numReviews: 41,
  },
  {
    name: "Denim 13",
    description:
      "The Denim 13 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 41534,
    discountPrice: 41082,
    countInStock: 30,
    sku: "SKU-MEN-DEN-013",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/013_1.jpg",
        altText: "Denim 13 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/013_2.jpg",
        altText: "Denim 13 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/013_3.jpg",
        altText: "Denim 13 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/013_4.jpg",
        altText: "Denim 13 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/013_5.jpg",
        altText: "Denim 13 Additional View",
      },
    ],
    rating: 4.9,
    numReviews: 61,
  },
  {
    name: "Sweaters 6",
    description:
      "The Sweaters 6 is a premium sweaters designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 24161,
    discountPrice: 22416,
    countInStock: 41,
    sku: "SKU-MEN-SWE-006",
    category: "Sweaters",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Sweaters 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Sweaters 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Sweaters 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Sweaters 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Sweaters 6 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 12,
  },
  {
    name: "Sweaters 10",
    description:
      "The Sweaters 10 is a premium sweaters designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 27215,
    discountPrice: 26131,
    countInStock: 29,
    sku: "SKU-MEN-SWE-010",
    category: "Sweaters",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Sweaters 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Sweaters 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Sweaters 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Sweaters 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Sweaters 10 Additional View",
      },
    ],
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Skirt 3",
    description:
      "The Skirt 3 is a premium skirt designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 12875,
    discountPrice: 11083,
    countInStock: 12,
    sku: "SKU-WOM-SKI-003",
    category: "Skirt",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Skirt 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Skirt 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Skirt 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Skirt 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Skirt 3 Additional View",
      },
    ],
    rating: 4.7,
    numReviews: 13,
  },
  {
    name: "Blouses_Shirts 5",
    description:
      "The Blouses_Shirts 5 is a premium blouses_shirts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 5206,
    discountPrice: 3617,
    countInStock: 25,
    sku: "SKU-WOM-BLO-005",
    category: "Blouses_Shirts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Blouses_Shirts 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Blouses_Shirts 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Blouses_Shirts 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Blouses_Shirts 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Blouses_Shirts 5 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 59,
  },
  {
    name: "Jackets_Coats 4",
    description:
      "The Jackets_Coats 4 is a premium jackets_coats designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 14153,
    discountPrice: 13891,
    countInStock: 10,
    sku: "SKU-WOM-JAC-004",
    category: "Jackets_Coats",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Jackets_Coats 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Jackets_Coats 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Jackets_Coats 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Jackets_Coats 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Jackets_Coats 4 Additional View",
      },
    ],
    rating: 4.4,
    numReviews: 33,
  },
  {
    name: "Suiting 2",
    description:
      "The Suiting 2 is a premium suiting designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 110680,
    discountPrice: 109728,
    countInStock: 13,
    sku: "SKU-MEN-SUI-002",
    category: "Suiting",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Suiting 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Suiting 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Suiting 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Suiting 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Suiting 2 Additional View",
      },
    ],
    rating: 4.1,
    numReviews: 38,
  },
  {
    name: "Leggings 2",
    description:
      "The Leggings 2 is a premium leggings designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 20407,
    discountPrice: 19784,
    countInStock: 34,
    sku: "SKU-WOM-LEG-002",
    category: "Leggings",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Leggings 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Leggings 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Leggings 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Leggings 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Leggings 2 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 25,
  },
  {
    name: "Graphic_Tees 5",
    description:
      "The Graphic_Tees 5 is a premium graphic_tees designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 8000,
    discountPrice: 6512,
    countInStock: 44,
    sku: "SKU-WOM-GRA-005",
    category: "Graphic_Tees",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Graphic_Tees 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Graphic_Tees 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Graphic_Tees 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Graphic_Tees 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Graphic_Tees 5 Additional View",
      },
    ],
    rating: 4.5,
    numReviews: 60,
  },
  {
    name: "Denim 7",
    description:
      "The Denim 7 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 118470,
    discountPrice: 117036,
    countInStock: 38,
    sku: "SKU-MEN-DEN-007",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_1.jpg",
        altText: "Denim 7 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_2.jpg",
        altText: "Denim 7 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_3.jpg",
        altText: "Denim 7 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_4.jpg",
        altText: "Denim 7 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/007_5.jpg",
        altText: "Denim 7 Additional View",
      },
    ],
    rating: 4.9,
    numReviews: 23,
  },
  {
    name: "Rompers_Jumpsuits 8",
    description:
      "The Rompers_Jumpsuits 8 is a premium rompers_jumpsuits designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 57348,
    discountPrice: 56969,
    countInStock: 27,
    sku: "SKU-WOM-ROM-008",
    category: "Rompers_Jumpsuits",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Rompers_Jumpsuits 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Rompers_Jumpsuits 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Rompers_Jumpsuits 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Rompers_Jumpsuits 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Rompers_Jumpsuits 8 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 19,
  },
  {
    name: "Tees_Tanks 5",
    description:
      "The Tees_Tanks 5 is a premium tees_tanks designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 13879,
    discountPrice: 12403,
    countInStock: 29,
    sku: "SKU-MEN-TEE-005",
    category: "Tees_Tanks",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Tees_Tanks 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Tees_Tanks 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Tees_Tanks 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Tees_Tanks 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Tees_Tanks 5 Additional View",
      },
    ],
    rating: 3.6,
    numReviews: 50,
  },
  {
    name: "Sweaters 5",
    description:
      "The Sweaters 5 is a premium sweaters designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 17733,
    discountPrice: 17530,
    countInStock: 14,
    sku: "SKU-MEN-SWE-005",
    category: "Sweaters",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Sweaters 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Sweaters 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Sweaters 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Sweaters 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Sweaters 5 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 12,
  },
  {
    name: "Denim 2",
    description:
      "The Denim 2 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 69969,
    discountPrice: 69521,
    countInStock: 20,
    sku: "SKU-MEN-DEN-002",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Denim 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Denim 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Denim 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Denim 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Denim 2 Additional View",
      },
    ],
    rating: 4.1,
    numReviews: 62,
  },
  {
    name: "Sweatshirts_Hoodies 3",
    description:
      "The Sweatshirts_Hoodies 3 is a premium sweatshirts_hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 41167,
    discountPrice: 39273,
    countInStock: 27,
    sku: "SKU-WOM-SWE-003",
    category: "Sweatshirts_Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Sweatshirts_Hoodies 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Sweatshirts_Hoodies 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Sweatshirts_Hoodies 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Sweatshirts_Hoodies 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Sweatshirts_Hoodies 3 Additional View",
      },
    ],
    rating: 4.5,
    numReviews: 55,
  },
  {
    name: "Hoodies 3",
    description:
      "The Hoodies 3 is a premium hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 12946,
    discountPrice: 11808,
    countInStock: 21,
    sku: "SKU-WOM-HOO-003",
    category: "Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Hoodies 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Hoodies 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Hoodies 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Hoodies 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Hoodies 3 Additional View",
      },
    ],
    rating: 4.6,
    numReviews: 20,
  },
  {
    name: "Tees_Tanks 5",
    description:
      "The Tees_Tanks 5 is a premium tees_tanks designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 18400,
    discountPrice: 17970,
    countInStock: 18,
    sku: "SKU-WOM-TEE-005",
    category: "Tees_Tanks",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Tees_Tanks 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Tees_Tanks 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Tees_Tanks 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Tees_Tanks 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Tees_Tanks 5 Additional View",
      },
    ],
    rating: 4.5,
    numReviews: 14,
  },
  {
    name: "Tees_Tanks 2",
    description:
      "The Tees_Tanks 2 is a premium tees_tanks designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 36073,
    discountPrice: 35198,
    countInStock: 11,
    sku: "SKU-MEN-TEE-002",
    category: "Tees_Tanks",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Tees_Tanks 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Tees_Tanks 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Tees_Tanks 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Tees_Tanks 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Tees_Tanks 2 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 28,
  },
  {
    name: "Sweatshirts_Hoodies 8",
    description:
      "The Sweatshirts_Hoodies 8 is a premium sweatshirts_hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 23296,
    discountPrice: 23085,
    countInStock: 22,
    sku: "SKU-WOM-SWE-008",
    category: "Sweatshirts_Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_1.jpg",
        altText: "Sweatshirts_Hoodies 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_2.jpg",
        altText: "Sweatshirts_Hoodies 8 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_3.jpg",
        altText: "Sweatshirts_Hoodies 8 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_4.jpg",
        altText: "Sweatshirts_Hoodies 8 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/008_5.jpg",
        altText: "Sweatshirts_Hoodies 8 Additional View",
      },
    ],
    rating: 3.8,
    numReviews: 47,
  },
  {
    name: "Shorts 10",
    description:
      "The Shorts 10 is a premium shorts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 15566,
    discountPrice: 14650,
    countInStock: 47,
    sku: "SKU-WOM-SHO-010",
    category: "Shorts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Shorts 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Shorts 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Shorts 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Shorts 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Shorts 10 Additional View",
      },
    ],
    rating: 4.6,
    numReviews: 50,
  },
  {
    name: "Jeans 5",
    description:
      "The Jeans 5 is a premium jeans designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 46302,
    discountPrice: 46100,
    countInStock: 39,
    sku: "SKU-WOM-JEA-005",
    category: "Jeans",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Jeans 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Jeans 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Jeans 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Jeans 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Jeans 5 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 29,
  },
  {
    name: "Rompers_Jumpsuits 1",
    description:
      "The Rompers_Jumpsuits 1 is a premium rompers_jumpsuits designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 44151,
    discountPrice: 42872,
    countInStock: 19,
    sku: "SKU-WOM-ROM-001",
    category: "Rompers_Jumpsuits",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Rompers_Jumpsuits 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Rompers_Jumpsuits 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Rompers_Jumpsuits 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Rompers_Jumpsuits 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Rompers_Jumpsuits 1 Additional View",
      },
    ],
    rating: 3.9,
    numReviews: 66,
  },
  {
    name: "Denim 15",
    description:
      "The Denim 15 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 57085,
    discountPrice: 56662,
    countInStock: 28,
    sku: "SKU-MEN-DEN-015",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/015_1.jpg",
        altText: "Denim 15 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/015_2.jpg",
        altText: "Denim 15 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/015_3.jpg",
        altText: "Denim 15 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/015_4.jpg",
        altText: "Denim 15 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/015_5.jpg",
        altText: "Denim 15 Additional View",
      },
    ],
    rating: 4.7,
    numReviews: 29,
  },
  {
    name: "Sweatshirts_Hoodies 6",
    description:
      "The Sweatshirts_Hoodies 6 is a premium sweatshirts_hoodies designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 78075,
    discountPrice: 77847,
    countInStock: 31,
    sku: "SKU-MEN-SWE-006",
    category: "Sweatshirts_Hoodies",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Sweatshirts_Hoodies 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Sweatshirts_Hoodies 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Sweatshirts_Hoodies 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Sweatshirts_Hoodies 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Sweatshirts_Hoodies 6 Additional View",
      },
    ],
    rating: 4.4,
    numReviews: 6,
  },
  {
    name: "Shorts 3",
    description:
      "The Shorts 3 is a premium shorts designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 33623,
    discountPrice: 31989,
    countInStock: 40,
    sku: "SKU-MEN-SHO-003",
    category: "Shorts",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Shorts 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Shorts 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Shorts 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Shorts 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Shorts 3 Additional View",
      },
    ],
    rating: 3.9,
    numReviews: 44,
  },
  {
    name: "Shorts 6",
    description:
      "The Shorts 6 is a premium shorts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 11854,
    discountPrice: 11222,
    countInStock: 38,
    sku: "SKU-WOM-SHO-006",
    category: "Shorts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Shorts 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Shorts 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Shorts 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Shorts 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Shorts 6 Additional View",
      },
    ],
    rating: 3.7,
    numReviews: 53,
  },
  {
    name: "Tees_Tanks 3",
    description:
      "The Tees_Tanks 3 is a premium tees_tanks designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 26321,
    discountPrice: 25415,
    countInStock: 49,
    sku: "SKU-MEN-TEE-003",
    category: "Tees_Tanks",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Tees_Tanks 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Tees_Tanks 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Tees_Tanks 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Tees_Tanks 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Tees_Tanks 3 Additional View",
      },
    ],
    rating: 4.1,
    numReviews: 56,
  },
  {
    name: "Shorts 2",
    description:
      "The Shorts 2 is a premium shorts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 29638,
    discountPrice: 29345,
    countInStock: 31,
    sku: "SKU-WOM-SHO-002",
    category: "Shorts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Shorts 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Shorts 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Shorts 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Shorts 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Shorts 2 Additional View",
      },
    ],
    rating: 4.7,
    numReviews: 69,
  },
  {
    name: "Jackets_Coats 2",
    description:
      "The Jackets_Coats 2 is a premium jackets_coats designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 22539,
    discountPrice: 20612,
    countInStock: 35,
    sku: "SKU-WOM-JAC-002",
    category: "Jackets_Coats",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Jackets_Coats 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Jackets_Coats 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Jackets_Coats 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Jackets_Coats 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Jackets_Coats 2 Additional View",
      },
    ],
    rating: 4.8,
    numReviews: 7,
  },
  {
    name: "Suiting 1",
    description:
      "The Suiting 1 is a premium suiting designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 148521,
    discountPrice: 147308,
    countInStock: 29,
    sku: "SKU-MEN-SUI-001",
    category: "Suiting",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Suiting 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Suiting 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Suiting 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Suiting 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Suiting 1 Additional View",
      },
    ],
    rating: 4.7,
    numReviews: 41,
  },
  {
    name: "Denim 3",
    description:
      "The Denim 3 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 44753,
    discountPrice: 43979,
    countInStock: 36,
    sku: "SKU-MEN-DEN-003",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Denim 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Denim 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Denim 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Denim 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Denim 3 Additional View",
      },
    ],
    rating: 5.0,
    numReviews: 40,
  },
  {
    name: "Skirt 6",
    description:
      "The Skirt 6 is a premium skirt designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 19058,
    discountPrice: 17358,
    countInStock: 10,
    sku: "SKU-WOM-SKI-006",
    category: "Skirt",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Skirt 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Skirt 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Skirt 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Skirt 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Skirt 6 Additional View",
      },
    ],
    rating: 3.9,
    numReviews: 22,
  },
  {
    name: "Sweaters 4",
    description:
      "The Sweaters 4 is a premium sweaters designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 27431,
    discountPrice: 26529,
    countInStock: 27,
    sku: "SKU-MEN-SWE-004",
    category: "Sweaters",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_1.jpg",
        altText: "Sweaters 4 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_2.jpg",
        altText: "Sweaters 4 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_3.jpg",
        altText: "Sweaters 4 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_4.jpg",
        altText: "Sweaters 4 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/004_5.jpg",
        altText: "Sweaters 4 Additional View",
      },
    ],
    rating: 3.6,
    numReviews: 21,
  },
  {
    name: "Denim 1",
    description:
      "The Denim 1 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 72456,
    discountPrice: 71772,
    countInStock: 24,
    sku: "SKU-MEN-DEN-001",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Denim 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Denim 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Denim 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Denim 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Denim 1 Additional View",
      },
    ],
    rating: 4.9,
    numReviews: 41,
  },
  {
    name: "Hoodies 5",
    description:
      "The Hoodies 5 is a premium hoodies designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 24398,
    discountPrice: 23972,
    countInStock: 24,
    sku: "SKU-WOM-HOO-005",
    category: "Hoodies",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Hoodies 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Hoodies 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Hoodies 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Hoodies 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Hoodies 5 Additional View",
      },
    ],
    rating: 4.1,
    numReviews: 33,
  },
  {
    name: "Tees_Tanks 3",
    description:
      "The Tees_Tanks 3 is a premium tees_tanks designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 18557,
    discountPrice: 18351,
    countInStock: 50,
    sku: "SKU-WOM-TEE-003",
    category: "Tees_Tanks",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Tees_Tanks 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Tees_Tanks 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Tees_Tanks 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Tees_Tanks 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Tees_Tanks 3 Additional View",
      },
    ],
    rating: 4.4,
    numReviews: 47,
  },
  {
    name: "Jackets_Coats 9",
    description:
      "The Jackets_Coats 9 is a premium jackets_coats designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 12643,
    discountPrice: 11425,
    countInStock: 9,
    sku: "SKU-WOM-JAC-009",
    category: "Jackets_Coats",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Jackets_Coats 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Jackets_Coats 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Jackets_Coats 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Jackets_Coats 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Jackets_Coats 9 Additional View",
      },
    ],
    rating: 4.2,
    numReviews: 57,
  },
  {
    name: "Sweatshirts_Hoodies 9",
    description:
      "The Sweatshirts_Hoodies 9 is a premium sweatshirts_hoodies designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 28784,
    discountPrice: 27917,
    countInStock: 42,
    sku: "SKU-MEN-SWE-009",
    category: "Sweatshirts_Hoodies",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Sweatshirts_Hoodies 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Sweatshirts_Hoodies 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Sweatshirts_Hoodies 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Sweatshirts_Hoodies 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Sweatshirts_Hoodies 9 Additional View",
      },
    ],
    rating: 4.7,
    numReviews: 27,
  },
  {
    name: "Jackets_Coats 10",
    description:
      "The Jackets_Coats 10 is a premium jackets_coats designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 21195,
    discountPrice: 19712,
    countInStock: 34,
    sku: "SKU-WOM-JAC-010",
    category: "Jackets_Coats",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Jackets_Coats 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Jackets_Coats 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Jackets_Coats 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Jackets_Coats 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Jackets_Coats 10 Additional View",
      },
    ],
    rating: 4.5,
    numReviews: 65,
  },
  {
    name: "Graphic_Tees 3",
    description:
      "The Graphic_Tees 3 is a premium graphic_tees designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 7584,
    discountPrice: 6335,
    countInStock: 41,
    sku: "SKU-WOM-GRA-003",
    category: "Graphic_Tees",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Graphic_Tees 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Graphic_Tees 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Graphic_Tees 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Graphic_Tees 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Graphic_Tees 3 Additional View",
      },
    ],
    rating: 4.4,
    numReviews: 18,
  },
  {
    name: "Suiting 10",
    description:
      "The Suiting 10 is a premium suiting designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 62263,
    discountPrice: 60335,
    countInStock: 42,
    sku: "SKU-MEN-SUI-010",
    category: "Suiting",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_1.jpg",
        altText: "Suiting 10 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_2.jpg",
        altText: "Suiting 10 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_3.jpg",
        altText: "Suiting 10 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_4.jpg",
        altText: "Suiting 10 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/010_5.jpg",
        altText: "Suiting 10 Additional View",
      },
    ],
    rating: 4.0,
    numReviews: 64,
  },
  {
    name: "Blouses_Shirts 3",
    description:
      "The Blouses_Shirts 3 is a premium blouses_shirts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 17870,
    discountPrice: 16397,
    countInStock: 8,
    sku: "SKU-WOM-BLO-003",
    category: "Blouses_Shirts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_1.jpg",
        altText: "Blouses_Shirts 3 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_2.jpg",
        altText: "Blouses_Shirts 3 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_3.jpg",
        altText: "Blouses_Shirts 3 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_4.jpg",
        altText: "Blouses_Shirts 3 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/003_5.jpg",
        altText: "Blouses_Shirts 3 Additional View",
      },
    ],
    rating: 4.4,
    numReviews: 75,
  },
  {
    name: "Rompers_Jumpsuits 2",
    description:
      "The Rompers_Jumpsuits 2 is a premium rompers_jumpsuits designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 29760,
    discountPrice: 29461,
    countInStock: 46,
    sku: "SKU-WOM-ROM-002",
    category: "Rompers_Jumpsuits",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_1.jpg",
        altText: "Rompers_Jumpsuits 2 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_2.jpg",
        altText: "Rompers_Jumpsuits 2 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_3.jpg",
        altText: "Rompers_Jumpsuits 2 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_4.jpg",
        altText: "Rompers_Jumpsuits 2 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/002_5.jpg",
        altText: "Rompers_Jumpsuits 2 Additional View",
      },
    ],
    rating: 4.2,
    numReviews: 22,
  },
  {
    name: "Denim 6",
    description:
      "The Denim 6 is a premium denim designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 48713,
    discountPrice: 48188,
    countInStock: 49,
    sku: "SKU-MEN-DEN-006",
    category: "Denim",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_1.jpg",
        altText: "Denim 6 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_2.jpg",
        altText: "Denim 6 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_3.jpg",
        altText: "Denim 6 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_4.jpg",
        altText: "Denim 6 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/006_5.jpg",
        altText: "Denim 6 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 10,
  },
  {
    name: "Graphic_Tees 1",
    description:
      "The Graphic_Tees 1 is a premium graphic_tees designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 12674,
    discountPrice: 10855,
    countInStock: 8,
    sku: "SKU-WOM-GRA-001",
    category: "Graphic_Tees",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_1.jpg",
        altText: "Graphic_Tees 1 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_2.jpg",
        altText: "Graphic_Tees 1 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_3.jpg",
        altText: "Graphic_Tees 1 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_4.jpg",
        altText: "Graphic_Tees 1 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/001_5.jpg",
        altText: "Graphic_Tees 1 Additional View",
      },
    ],
    rating: 4.9,
    numReviews: 37,
  },
  {
    name: "Jackets_Coats 5",
    description:
      "The Jackets_Coats 5 is a premium jackets_coats designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 19664,
    discountPrice: 17951,
    countInStock: 19,
    sku: "SKU-WOM-JAC-005",
    category: "Jackets_Coats",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_1.jpg",
        altText: "Jackets_Coats 5 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_2.jpg",
        altText: "Jackets_Coats 5 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_3.jpg",
        altText: "Jackets_Coats 5 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_4.jpg",
        altText: "Jackets_Coats 5 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/005_5.jpg",
        altText: "Jackets_Coats 5 Additional View",
      },
    ],
    rating: 3.6,
    numReviews: 52,
  },
  {
    name: "Blouses_Shirts 9",
    description:
      "The Blouses_Shirts 9 is a premium blouses_shirts designed for women. Crafted from high-quality Cotton, it ensures durability and comfort. Perfect for casual occasions, it offers both style and practicality.",
    price: 19012,
    discountPrice: 18001,
    countInStock: 38,
    sku: "SKU-WOM-BLO-009",
    category: "Blouses_Shirts",
    brand: "Elite Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Casual",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Blouses_Shirts 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Blouses_Shirts 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Blouses_Shirts 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Blouses_Shirts 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Blouses_Shirts 9 Additional View",
      },
    ],
    rating: 5.0,
    numReviews: 36,
  },
  {
    name: "Shorts 9",
    description:
      "The Shorts 9 is a premium shorts designed for men. Crafted from high-quality Denim, it ensures durability and comfort. Perfect for street style occasions, it offers both style and practicality.",
    price: 24309,
    discountPrice: 23076,
    countInStock: 50,
    sku: "SKU-MEN-SHO-009",
    category: "Shorts",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue", "Red", "Brown"],
    collections: "Street Style",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_1.jpg",
        altText: "Shorts 9 Front View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_2.jpg",
        altText: "Shorts 9 Back View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_3.jpg",
        altText: "Shorts 9 Side View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_4.jpg",
        altText: "Shorts 9 Full View",
      },
      {
        url: "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757337644/deepfashion/009_5.jpg",
        altText: "Shorts 9 Additional View",
      },
    ],
    rating: 4.3,
    numReviews: 52,
  },
];

module.exports = products;

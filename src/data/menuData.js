import Assets from "../assets/Assets";

export const MENU_CATEGORIES = [
  "Appetizers",
  "Soups & Salads",
  "Main Course",
  "Side Dishes",
  "Desserts",
  "Beverages",
];

const slug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const SIGNATURE_ITEMS = [
  {
    id: "signature-chili-chicken",
    title: "Chili Chicken",
    description:
      "Crispy chicken tossed in our signature house chili sauce with peppers and onions.",
    price: 14.99,
    category: "Main Course",
    images: [
      Assets.signatureDish1,
      Assets.signatureDish1,
      Assets.signatureDish1,
      Assets.signatureDish1,
    ],
  },
  {
    id: "signature-chicken-manchurian",
    title: "Chicken Manchurian",
    description:
      "Baby chicken dumplings served in rich Manchurian gravy with aromatic spices.",
    price: 14.99,
    category: "Main Course",
    images: [
      Assets.signatureDish2,
      Assets.signatureDish2,
      Assets.signatureDish2,
      Assets.signatureDish2,
    ],
  },
  {
    id: "signature-szechuan-chicken",
    title: "Szechuan Chicken",
    description:
      "Spicy chicken stir-fried with bold Szechuan flavors and fresh vegetables.",
    price: 15.99,
    category: "Main Course",
    images: [
      Assets.signatureDish3,
      Assets.signatureDish3,
      Assets.signatureDish3,
      Assets.signatureDish3,
    ],
  },
  {
    id: "signature-sweet-sour-chicken-pineapple",
    title: "Sweet & Sour Chicken with Pineapple",
    description:
      "Crispy chicken in a tangy sweet-and-sour glaze with pineapple chunks.",
    price: 16.49,
    category: "Main Course",
    images: [
      Assets.signatureDish4,
      Assets.signatureDish4,
      Assets.signatureDish4,
      Assets.signatureDish4,
    ],
  },
];

// Seeds used to generate the 4x3 grid per category in MenuItemsSection.
// Price lives in the seed as requested.
const GRID_SEEDS = [
  {
    title: "Golden Shakshuka",
    description:
      "Savor our wok-tossed noodles with bold sauces and crisp veggies.",
    price: 18.45,
  },
  {
    title: "Sunny Spice Stack",
    description:
      "Creamy risotto finished with fresh herbs and a coastal twist.",
    price: 16.5,
  },
  {
    title: "Ocean Symphony Risotto",
    description:
      "Crispy bites glazed with a savory-sweet sauce and aromatics.",
    price: 12.0,
  },
  {
    title: "Golden Crispy Duck Confit",
    description:
      "Warm chocolate center with a rich cocoa finish and soft crumb.",
    price: 11.49,
  },
  {
    title: "Velvet Chocolate Lava Cake",
    description:
      "A curated platter of bites with bright flavors and fresh garnishes.",
    price: 10.99,
  },
  {
    title: "Thai-included Wagyu Delight",
    description:
      "Slow-simmered sauces, crisp textures, and balanced heat in every bite.",
    price: 12.99,
  },
  {
    title: "Golden Crispy Duck Confit",
    description:
      "Golden-fried crunch with a tender center and bold seasoning.",
    price: 13.49,
  },
  {
    title: "Velvet Chocolate Lava Cake",
    description:
      "Decadent dessert with a silky molten core and cocoa aroma.",
    price: 13.99,
  },
  {
    title: "Thai-included Wagyu Delight",
    description:
      "Sizzling wok flavors with a spicy finish and fresh herbs.",
    price: 14.49,
  },
  {
    title: "Thai-included Wagyu Delight",
    description:
      "Crispy, saucy, and perfectly balanced for a craveable bite.",
    price: 14.99,
  },
  {
    title: "Golden Crispy Duck Confit",
    description:
      "Fragrant rice tossed with veggies, aromatics, and savory spice.",
    price: 15.49,
  },
  {
    title: "Velvet Chocolate Lava Cake",
    description: "A vibrant plate with bold spices and comforting warmth.",
    price: 15.99,
  },
];

const GRID_IMAGES = [
  Assets.item1,
  Assets.item2,
  Assets.item3,
  Assets.item4,
  Assets.item5,
  Assets.item6,
  Assets.item7,
  Assets.item8,
  Assets.item9,
  Assets.item10,
  Assets.item11,
  Assets.item12,
];

export const MENU_GRID_ITEMS = MENU_CATEGORIES.flatMap((category) =>
  GRID_SEEDS.map((seed, index) => {
    const baseId = `${slug(category)}-${index}`;
    const image = GRID_IMAGES[index % GRID_IMAGES.length];
    return {
      id: baseId,
      category,
      title: seed.title,
      description: seed.description,
      price: seed.price,
      stars: 5,
      images: [image, image, image, image],
    };
  }),
);

export const ALL_PRODUCTS = [...SIGNATURE_ITEMS, ...MENU_GRID_ITEMS];

export const getProductById = (id) => ALL_PRODUCTS.find((p) => p.id === id);

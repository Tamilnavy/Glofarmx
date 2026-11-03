export type ProductCategory = "Vegetables" | "Fruits" | "Spices & Herbs";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  image: {
    /** Remote (hotlinked) image URL. Omit when `localKey` is set. */
    src?: string;
    /** Key into localProductImages (src/data/productImages.ts) for locally supplied photography. */
    localKey?: string;
    alt: string;
    /** CSS object-position, for photos where the subject isn't centered. */
    position?: string;
  };
}

/**
 * Keep product content here so it can be edited without touching components.
 * Availability is not implied — confirm current availability with the business
 * before quoting a buyer.
 */
export const productCategories: ProductCategory[] = ["Vegetables", "Fruits", "Spices & Herbs"];

export const products: Product[] = [
  {
    id: "onion",
    name: "Onion",
    description: "Fresh red and white onions, graded for size and firmness ahead of export packing.",
    category: "Vegetables",
    image: {
      localKey: "onion",
      alt: "A rustic heap of freshly harvested red onions",
    },
  },
  {
    id: "potato",
    name: "Potato",
    description: "Farm-fresh potatoes selected for consistent size and clean skin.",
    category: "Vegetables",
    image: {
      localKey: "potato",
      alt: "Freshly harvested potatoes in a rustic crate",
    },
  },
  {
    id: "carrot",
    name: "Carrot",
    description: "Crisp, bright carrots sourced for natural colour and firm texture.",
    category: "Vegetables",
    image: {
      localKey: "carrot",
      alt: "Freshly harvested carrots with green tops in a rustic crate",
    },
  },
  {
    id: "tomato",
    name: "Tomato",
    description: "Vine-ripened tomatoes chosen for colour, firmness, and shelf readiness.",
    category: "Vegetables",
    image: {
      localKey: "tomato",
      alt: "Freshly harvested tomatoes in a wooden crate",
    },
  },
  {
    id: "okra",
    name: "Okra",
    description: "Tender okra (ladies finger) sourced fresh and sorted by size.",
    category: "Vegetables",
    image: {
      localKey: "okra",
      alt: "Fresh okra in a rustic farm crate",
    },
  },
  {
    id: "brinjal",
    name: "Brinjal",
    description: "Glossy, firm brinjal (eggplant) selected for export-grade quality.",
    category: "Vegetables",
    image: {
      localKey: "brinjal",
      alt: "Freshly harvested glossy purple brinjal (eggplant)",
    },
  },
  {
    id: "green-chilli",
    name: "Green Chilli",
    description: "Fresh green chillies sourced for consistent heat and vivid colour.",
    category: "Spices & Herbs",
    image: {
      src: "https://images.unsplash.com/photo-1524593410820-38510f580a77",
      alt: "Fresh green chillies",
    },
  },
  {
    id: "green-beans",
    name: "Green Beans",
    description: "Tender green beans, hand-picked and sorted for uniform size.",
    category: "Vegetables",
    image: {
      src: "https://images.unsplash.com/photo-1424593463432-4104fa2c015a",
      alt: "Fresh green beans on a cutting board",
    },
  },
  {
    id: "drumstick",
    name: "Drumstick",
    description: "Fresh drumstick (moringa) pods sourced from trusted growing regions.",
    category: "Vegetables",
    image: {
      localKey: "drumstick",
      alt: "Fresh drumstick (moringa) pods in a wooden crate",
    },
  },
  {
    id: "spinach",
    name: "Spinach",
    description: "Fresh leafy spinach, sourced and handled to preserve quality.",
    category: "Vegetables",
    image: {
      src: "https://images.unsplash.com/photo-1634731201932-9bd92839bea2",
      alt: "Fresh spinach leaves",
    },
  },
  {
    id: "turmeric",
    name: "Turmeric",
    description: "Fresh turmeric rhizomes sourced for natural colour and aroma.",
    category: "Spices & Herbs",
    image: {
      localKey: "turmeric",
      alt: "Freshly harvested turmeric rhizomes in a farm crate",
    },
  },
  {
    id: "tamarind",
    name: "Tamarind",
    description: "Fresh tamarind pods sourced from trusted growing regions.",
    category: "Spices & Herbs",
    image: {
      localKey: "tamarind",
      alt: "Freshly harvested tamarind pods in a wicker basket",
    },
  },
  {
    id: "green-banana",
    name: "Green Banana",
    description: "Raw, unripe green bananas sourced for firmness and consistent sizing.",
    category: "Fruits",
    image: {
      src: "https://images.unsplash.com/photo-1742048940204-e1abe2c6d8bf",
      alt: "A bunch of green bananas hanging on a tree",
    },
  },
];

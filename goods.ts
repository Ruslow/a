export type Goods = Good[];

interface Good {
  name: string;
  price: number;
  id: number;
  inStock: boolean;
  images: [string, string];
}

export const goods: Goods = [
  {
    name: "Nike Air Max Deluxe",
    price: 12000,
    id: 1,
    inStock: true,
    images: [
      "/images/sneakers/nikeAirMaxDeluxe/1.jpg",
      "/images/sneakers/nikeAirMaxDeluxe/2.jpg",
    ],
  },
  {
    name: "Comme Des Garcon x KAWS Shirt",
    price: 3000,
    id: 2,
    inStock: true,
    images: [
      "/images/shirts/commeDesGarconsxKAWSShirt/1.jpg",
      "/images/shirts/commeDesGarconsxKAWSShirt/2.jpg",
    ],
  },
  {
    name: "Uniqlo T-Shirt",
    price: 37200,
    id: 3,
    inStock: true,
    images: [
      "/images/tshirts/uniqloT-Shirt/1.jpg",
      "/images/tshirts/uniqloT-Shirt/2.jpg",
    ],
  },
  {
    name: "Yeezy Boost 700 MNV Honey Flux",
    price: 18000,
    id: 4,
    inStock: true,
    images: [
      "/images/sneakers/yeezyBoost700MNVNHoneyFlux/1.jpg",
      "/images/sneakers/yeezyBoost700MNVNHoneyFlux/2.jpg",
    ],
  },
  {
    name: "Guess T-Shirt",
    price: 4000,
    id: 5,
    inStock: true,
    images: [
      "/images/tshirts/guessT-Shirt/1.jpg",
      "/images/tshirts/guessT-Shirt/2.jpg",
    ],
  },
];

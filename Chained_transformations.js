const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 25,
    stock: 50,
    active: true,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 120,
    stock: 15,
    active: true,
  },
  {
    id: 3,
    name: "USB-C Hub",
    category: "Accessories",
    price: 45,
    stock: 30,
    active: true,
  },
  {
    id: 4,
    name: "Gaming Monitor",
    category: "Electronics",
    price: 250,
    stock: 0,
    active: false,
  },
  {
    id: 5,
    name: "Laptop Stand",
    category: "Accessories",
    price: 80,
    stock: 20,
    active: true,
  },
];

const newProducat = products
  .filter((p) => p.active)
  .map((p) => ({
    ...p,
    discountPrice: p.price * 0.9,
  }))
  .filter((p) => p.discountPrice <= 100)
  .sort((a, b) => a.discountPrice - b.discountPrice);

console.log(newProducat);

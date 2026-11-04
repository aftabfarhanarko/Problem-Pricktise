// 1. Filter by criteria

const products = [
  { name: "Notebook", price: 25, stock: 12 },
  { name: "Pen", price: 5, stock: 50 },
  { name: "Backpack", price: 75, stock: 8 },
  { name: "Water bottle", price: 35, stock: 0 },
  { name: "Pencil", price: 3000, stock: 60 },
];

const affordableInStock = products.filter((p) => p.stock > 30 && p.price > 400);

console.log(affordableInStock);

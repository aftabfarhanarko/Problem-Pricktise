// 2. Map to a lighter DTO

const products = [
  {
    id: "PROD-001",
    name: "Wireless Mouse M185",
    category: "Electronics",
    brand: "Logitech",
    price: 25,
    costPrice: 15,
    stock: 50,
    minStockLevel: 10,
    sku: "LOG-M185-001",
    supplier: {
      id: "SUP-001",
      name: "TechSource Ltd.",
    },
    status: "active",
  },
  {
    id: "PROD-002",
    name: "Mechanical Keyboard K552",
    category: "Electronics",
    brand: "Redragon",
    price: 65,
    costPrice: 40,
    stock: 5,
    minStockLevel: 10,
    sku: "RED-K552-002",
    supplier: {
      id: "SUP-002",
      name: "Digital World Ltd.",
    },
    status: "active",
  },
];


const lighterProducts = products.map((p) => ({
  id: p.id,
  name: p.name,
  price: p.price.toFixed(2),
  stock: p.stock,
}));

console.log("New Products", lighterProducts);

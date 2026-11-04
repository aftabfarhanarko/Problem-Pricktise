// 6. Pagination with slice
const additionalProducts = [
  {
    id: 31,
    name: "Gaming Laptop",
    category: "Computers",
    brand: "ASUS",
    price: 1200,
    costPrice: 950,
    stock: 12,
    minStockLevel: 5,
    active: true,
    supplier: "Global Tech",
  },
  {
    id: 32,
    name: "Wireless Earbuds",
    category: "Audio",
    brand: "Samsung",
    price: 75,
    costPrice: 45,
    stock: 35,
    minStockLevel: 10,
    active: true,
    supplier: "Audio Hub",
  },
  {
    id: 33,
    name: "Smart Watch",
    category: "Wearables",
    brand: "Xiaomi",
    price: 150,
    costPrice: 100,
    stock: 3,
    minStockLevel: 8,
    active: true,
    supplier: "Digital World",
  },
  {
    id: 34,
    name: "Wireless Charger",
    category: "Accessories",
    brand: "Anker",
    price: 35,
    costPrice: 20,
    stock: 0,
    minStockLevel: 10,
    active: false,
    supplier: "TechSource Ltd.",
  },
];

function paginate (arr , page = 1 ,  perPage = 10) {
    const start = (page - 1) * perPage;
    return arr.slice(start , start + perPage);
}

const page2 = paginate(additionalProducts, 2, 2);

console.log(page2);

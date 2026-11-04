// Combining_multiple_arrays.js
// Merge two product lists and dedupe:

const list1 = [567, 34, 45, 67, 78, 456];
const list2 = [56, 78, 56, 45, 345, 535];

const all = [...list1, ...list2];

const mergedUnique = all.reduce((acc, p) => {
  if (!acc.some((x) => x.id === p.id)) acc.push(p);
  return acc;
}, []);

console.log(mergedUnique);

// Complex APi End Point
app.get("/api/deals", (req, res) => {
  const deals = products
    .filter((p) => p.active)
    .filter((p) => p.stock > 0)
    .map((p) => ({
      id: p.id,
      name: p.name,
      dealPrice: (p.price * 0.85).toFixed(2),
    }))
    .filter((p) => p.dealPrice < 100)
    .sort((a, b) => a.dealPrice - b.dealPrice);

  res.json({ count: deals.length, deals });
});

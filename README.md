# Problem-PricktiseCommon Backend Pattern with Array Filters and JSON
Description
Common Backend Pattern with Array Filters and JSON
Here are several common “pipeline” patterns backend developers use when working with an array of product-JSON, leveraging map, filter, reduce, and related array methods. Feel free to mix-and-match these idioms to build clean, declarative data flows.

1. Filter by criteria
Only keep products that match one or more conditions:

const products = [ /* … */ ];

// in-stock and under $50
const affordableInStock = products
  .filter(p => p.stock > 0)
  .filter(p => p.price < 50);
Or combined:

const affordableInStock = products.filter(
  p => p.stock > 0 && p.price < 50
);
2. Map to a lighter DTO
Project each product to a smaller object (e.g. for API responses):

const lightProducts = products.map(p => ({
  id:     p.id,
  name:   p.name,
  price:  p.price.toFixed(2),
  inStock: p.stock > 0,
}));
3. Chained transformations
Compose multiple steps in one fluent chain:

const result = products
  .filter(p => p.active)              // only active items
  .map(p => ({                        // add a discount field
    ...p,
    discountedPrice: p.price * 0.9,
  }))
  .filter(p => p.discountedPrice <= 100)  // low-cost deals
  .sort((a,b) => a.discountedPrice - b.discountedPrice);
4. Aggregations with reduce
Compute totals, groupings, or other roll-ups:

Total inventory value
const totalValue = products.reduce(
  (sum, p) => sum + p.price * p.stock,
  0
);
Group by category
const byCategory = products.reduce((acc, p) => {

  (acc[p.category] = acc[p.category] || []).push(p);
  return acc;
}, {});
// ⇒ { "Books": [...], "Electronics": [...], ... }
5. Finding & checking
Find a specific product
const skuToFind = 'ABC-123';
const product = products.find(p => p.sku === skuToFind);
// returns the first match or undefined
Check if any product is on sale
const hasSale = products.some(p => p.onSale === true);
Ensure all products have a price
const allPriced = products.every(p => p.price != null);
6. Pagination with slice
Break a large array into pages:

function paginate(arr, page = 1, perPage = 10) {
  const start = (page - 1) * perPage;
  return arr.slice(start, start + perPage);
}

// usage
const page2 = paginate(products, 2, 20);
7. Sorting
Sort by any numeric or string field:

// ascending price
products.sort((a, b) => a.price - b.price);

// alphabetical by name
products.sort((a, b) => a.name.localeCompare(b.name));
8. Deduplicating by key
Remove duplicate products based on an id:

const unique = products.reduce((acc, p) => {
  if (!acc.find(existing => existing.id === p.id)) {
    acc.push(p);
  }
  return acc;
}, []);
9. Combining multiple arrays
Merge two product lists and dedupe:

const all = [...listA, ...listB];
const mergedUnique = all.reduce((acc, p) => {
  if (!acc.some(x => x.id === p.id)) acc.push(p);
  return acc;
}, []);
10. Side-effects with forEach
Perform operations without changing the array shape:

// e.g. preload images or sync logs
products.forEach(p => {
  cacheProductImage(p.imageUrl);
  logAccess(`Loaded product ${p.id}`);
});
Putting it all together
You can build complex API endpoints by snapping together these patterns:

app.get('/api/deals', (req, res) => {
  const deals = products
    .filter(p => p.active)
    .filter(p => p.stock > 0)
    .map(p => ({
      id: p.id, name: p.name,
      dealPrice: (p.price * 0.85).toFixed(2)
    }))
    .filter(p => p.dealPrice < 100)
    .sort((a,b) => a.dealPrice - b.dealPrice);

  res.json({ count: deals.length, deals });
});
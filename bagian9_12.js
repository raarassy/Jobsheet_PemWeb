// Data Dummy
const products = [
  { id: 1, title: "Laptop", category: "electronics", brand: "Asus", rating: 4.8, tags: ["computer", "gaming"] },
  { id: 2, title: "Smartphone", category: "electronics", brand: "Apple", rating: 4.5, tags: ["mobile", "electronics"] },
  { id: 3, title: "Headphones", category: "audio", brand: "Sony", rating: 4.0, tags: ["audio", "electronics"] },
  { id: 4, title: "Keyboard", category: "electronics", brand: "Logitech", rating: 4.2, tags: ["computer", "office"] },
  { id: 5, title: "Mouse", category: "computer", brand: "Logitech", rating: 3.9, tags: ["computer"] }
];

// BAGIAN 9: Grouping dan Aggregation
function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(product);
    return groups;
  }, {});
}

// BAGIAN 10: Frequency Counting
function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

// BAGIAN 11: Set (Unique Data)
function getUniqueData(products) {
  return {
    uniqueCategories: [...new Set(products.map(p => p.category))],
    uniqueBrands: [...new Set(products.map(p => p.brand))],
    uniqueTags: [...new Set(products.flatMap(p => p.tags))]
  };
}

// BAGIAN 12: Map (Struktur Data)
function buildProductLookup(products) {
  const productMap = new Map();
  for (const product of products) {
    productMap.set(product.id, product);
  }
  return productMap;
}

// --- Pengujian Pengolahan Data ---
console.log("HASIL GROUPING", groupByCategory(products));
console.log("FREKUENSI TAG", countFrequency(products.flatMap(p => p.tags)));
console.log("DATA UNIK", getUniqueData(products));
console.log("LOOKUP MAP ID 2", buildProductLookup(products).get(2));
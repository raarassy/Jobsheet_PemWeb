// Search & Filter Pipeline
export function filterProducts(products, keyword, category) {
  const lowerKeyword = keyword.toLowerCase().trim();
  return products.filter(p => {
    const matchesSearch = lowerKeyword === "" || p.title.toLowerCase().includes(lowerKeyword);
    const matchesCategory = category === "all" || p.category === category;
    return matchesSearch && matchesCategory;
  });
}

// Sorting Products
export function sortProducts(products, sortBy) {
  const arr = [...products];
  if (sortBy === "price-asc") return arr.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") return arr.sort((a, b) => b.price - a.price);
  if (sortBy === "rating") return arr.sort((a, b) => b.rating - a.rating);
  if (sortBy === "title") return arr.sort((a, b) => a.title.localeCompare(b.title));
  return arr;
}

// Statistics & Analytics (Bagian 25.1)
export function getStatistics(products) {
  if (!products || products.length === 0) {
    return { totalProducts: 0, averagePrice: 0, highestPrice: 0, lowestPrice: 0, totalStock: 0, averageRating: 0 };
  }

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalRating = products.reduce((sum, p) => sum + p.rating, 0);
  const averageRating = (totalRating / totalProducts).toFixed(2);

  const prices = products.map(p => p.price);
  const averagePrice = (prices.reduce((a, b) => a + b, 0) / totalProducts).toFixed(2);
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);

  return { totalProducts, averagePrice, highestPrice, lowestPrice, totalStock, averageRating };
}
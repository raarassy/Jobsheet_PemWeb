export function filterProducts(products, searchKeyword, category) {
  return products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchesCategory = category === "all" || p.category === category;
    return matchesSearch && matchesCategory;
  });
}

export function sortProducts(products, sortBy) {
  const arr = [...products];
  if (sortBy === "price-asc") return arr.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") return arr.sort((a, b) => b.price - a.price);
  if (sortBy === "rating") return arr.sort((a, b) => b.rating - a.rating);
  return arr;
}
// BAGIAN 1: JS Fundamentals & Problem Solving
function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

function applyDiscounts(cart) {
  const result = [];
  for (const item of cart) {
    const finalPrice = calculateDiscountedPrice(item.price, item.discountPercent);
    result.push({
      ...item,
      finalPrice: finalPrice
    });
  }
  return result;
}

// BAGIAN 2: Data Representation & Array of Objects
const sampleProducts = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];

function findProductById(products, id) {
  return products.find(p => p.id === id);
}

function getLowStockProducts(products) {
  return products.filter(p => p.stock < 10);
}

function updateStock(products, id, newStock) {
  return products.map(p =>
    p.id === id ? { ...p, stock: newStock } : p
  );
}

// BAGIAN 3: Nested Data
const nestedProducts = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];

const allTagsNested = nestedProducts.map(p => p.tags);

function findProductsByTag(products, tag) {
  return products.filter(p => p.tags.includes(tag));
}

function getTotalReviewsPerProduct(products) {
  return products.map(p => ({
    id: p.id,
    title: p.title,
    totalReviews: p.reviews.length
  }));
}

function getFiveStarReviews(products) {
  const fiveStarReviews = [];
  products.forEach(p => {
    p.reviews.forEach(r => {
      if (r.rating === 5) fiveStarReviews.push(r);
    });
  });
  return fiveStarReviews;
}

function getCalculatedAverageRating(products) {
  return products.map(p => {
    const totalRating = p.reviews.reduce((sum, r) => sum + r.rating, 0);
    const avgRating = p.reviews.length > 0 ? totalRating / p.reviews.length : 0;
    return {
      id: p.id,
      title: p.title,
      calculatedRating: parseFloat(avgRating.toFixed(2))
    };
  });
}

function getProductWithMostReviews(products) {
  return products.reduce((maxProduct, currentProduct) => {
    return (currentProduct.reviews.length > maxProduct.reviews.length)
      ? currentProduct
      : maxProduct;
  }, products[0]);
}

const allRatings = nestedProducts.flatMap(p => p.reviews.map(r => r.rating));

// BAGIAN 4: Flattening Data
const allUniqueTagsFlat = nestedProducts.flatMap(p => p.tags);

const allComments = nestedProducts.flatMap(p => p.reviews.map(r => r.comment));

console.log("Bagian 1-4 berhasil dijalankan.");
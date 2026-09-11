// Data Dummy
const products = [
  { id: 1, title: "Laptop Gaming", price: 1200, category: "laptops", rating: 4.8, stock: 10 },
  { id: 2, title: "Smartphone X", price: 800, category: "phones", rating: 4.5, stock: 25 },
  { id: 3, title: "Audio Headphones", price: 100, category: "audio", rating: 4.0, stock: 15 },
  { id: 4, title: "Laptop Office", price: 600, category: "laptops", rating: 4.2, stock: 8 },
  { id: 5, title: "Smartwatch", price: 200, category: "wearable", rating: 3.9, stock: 30 }
];

// BAGIAN 5: Map, Filter, Reduce
const laptopPrices = products
  .filter(p => p.category === "laptops")
  .map(p => p.price);

const avgLaptopPrice = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;

function getStatistics(products) {
  if (!products || products.length === 0) return null;

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalRating = products.reduce((sum, p) => sum + p.rating, 0);
  const averageRating = parseFloat((totalRating / totalProducts).toFixed(2));

  const prices = products.map(p => p.price);
  const averagePrice = parseFloat((prices.reduce((a, b) => a + b, 0) / totalProducts).toFixed(2));
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);

  return {
    totalProducts,
    averagePrice,
    highestPrice,
    lowestPrice,
    totalStock,
    averageRating
  };
}

// BAGIAN 6: Searching (Linear Search)
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

function linearSearchProductById(products, targetId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === targetId) return products[i];
  }
  return null;
}

// BAGIAN 7: Binary Search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

function binarySearchByPrice(sortedProducts, targetPrice) {
  let left = 0;
  let right = sortedProducts.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedProducts[mid].price === targetPrice) return sortedProducts[mid];
    if (sortedProducts[mid].price < targetPrice) left = mid + 1;
    else right = mid - 1;
  }
  return null;
}

// BAGIAN 8: Sorting
function bubbleSort(numbers) {
  const arr = [...numbers];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function sortProducts(products, sortBy) {
  const arr = [...products];
  switch (sortBy) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price);
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price);
    case "rating":
      return arr.sort((a, b) => b.rating - a.rating);
    case "title":
      return arr.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return arr;
  }
}

// --- Pengujian Pengolahan Data ---
console.log("STATISTIK", getStatistics(products));
console.log("BUBBLE SORT", bubbleSort([5, 3, 8, 1]));
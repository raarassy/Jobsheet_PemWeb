// Dataset Awal
const initialProducts = [
  { id: 1, title: "Laptop Gaming", price: 1200, category: "laptops", rating: 4.8, stock: 10, dimensions: { width: 30, height: 2 } },
  { id: 2, title: "Smartphone X", price: 800, category: "phones", rating: 4.5, stock: 25, dimensions: { width: 7, height: 0.8 } },
  { id: 3, title: "Audio Headphones", price: 100, category: "audio", rating: 4.0, stock: 15 },
  { id: 4, title: "Laptop Office", price: 600, category: "laptops", rating: 4.2, stock: 8 },
  { id: 5, title: "Smartwatch", price: 200, category: "wearable", rating: 3.9, stock: 30 }
];

// BAGIAN 18: State Management Sederhana
const state = {
  products: initialProducts,
  search: "",
  category: "all",
  sortBy: "default"
};

// BAGIAN 17: DOM Manipulation (Render Products)
function renderProducts(productsToRender) {
  const container = document.querySelector("#product-list");
  if (!container) return;

  container.innerHTML = "";

  if (productsToRender.length === 0) {
    container.innerHTML = "<p>Produk tidak ditemukan.</p>";
    return;
  }

  for (const product of productsToRender) {
    // BAGIAN 20: Destructuring & Optional Chaining
    const { title, category, price, rating, dimensions } = product;
    const widthInfo = dimensions?.width ?? "Tidak diketahui";

    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <h3>${title}</h3>
      <p>Kategori: ${category}</p>
      <p>Harga: $${price}</p>
      <p>Rating: ⭐ ${rating}</p>
      <p><small>Lebar: ${widthInfo}</small></p>
    `;
    container.append(card);
  }
}

// Main Render Function
function render() {
  let filtered = state.products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(state.search.toLowerCase());
    const matchesCategory = state.category === "all" || p.category === state.category;
    return matchesSearch && matchesCategory;
  });

  if (state.sortBy === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

// BAGIAN 19: Event Handling
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#search-input");
  const categorySelect = document.querySelector("#category-select");
  const sortSelect = document.querySelector("#sort-select");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.search = e.target.value;
      render();
    });
  }

  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => {
      state.category = e.target.value;
      render();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      render();
    });
  }

  render();
});

// BAGIAN 20.1: Refactor getStatistics dengan ES6+
function getStatistics(products) {
  if (!products?.length) return null;
  const totalStock = products.reduce((sum, { stock = 0 }) => sum + stock, 0);
  const averagePrice = products.reduce((sum, { price = 0 }) => sum + price, 0) / products.length;
  return { totalProducts: products.length, totalStock, averagePrice };
}

console.log("Bagian 17-20 berhasil dijalankan.");
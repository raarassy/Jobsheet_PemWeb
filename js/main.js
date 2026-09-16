import { state } from "./state.js";
import { fetchProducts } from "./api.js";
import { filterProducts, sortProducts, getStatistics } from "./algorithms.js";
import { renderProducts, renderStatistics } from "./ui.js";

async function loadProducts() {
  const container = document.querySelector("#product-list");
  try {
    state.status = "loading";
    if (container) container.innerHTML = "<p class='loading-msg'>Memuat data dari DummyJSON API...</p>";

    const data = await fetchProducts();
    state.products = data;
    state.status = "success";

    populateCategoryOptions(data);
    render();
  } catch (error) {
    state.status = "error";
    if (container) container.innerHTML = `<p class='error-msg'>Gagal memuat data: ${error.message}</p>`;
  }
}

function populateCategoryOptions(products) {
  const categorySelect = document.querySelector("#category-select");
  if (!categorySelect) return;
  
  const categories = ["all", ...new Set(products.map(p => p.category))];
  categorySelect.innerHTML = categories.map(cat => 
    `<option value="${cat}">${cat === 'all' ? 'Semua Kategori' : cat}</option>`
  ).join("");
}

function render() {
  const filtered = filterProducts(state.products, state.search, state.category);
  const sorted = sortProducts(filtered, state.sortBy);
  
  renderProducts(sorted);
  
  const stats = getStatistics(filtered);
  renderStatistics(stats);
}

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();

  document.querySelector("#search-input")?.addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
  });

  document.querySelector("#category-select")?.addEventListener("change", (e) => {
    state.category = e.target.value;
    render();
  });

  document.querySelector("#sort-select")?.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    render();
  });
});
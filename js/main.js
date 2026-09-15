import { state } from "./state.js";
import { filterProducts, sortProducts } from "./algorithms.js";
import { renderProducts } from "./ui.js";

// BAGIAN 22: Promise Simulation Data Loading
function mockFetchProducts() {
  return new Promise((resolve, reject) => {
    state.status = "loading";
    setTimeout(() => {
      const mockData = [
        { id: 1, title: "Laptop Modular", price: 1200, category: "laptops", rating: 4.8 },
        { id: 2, title: "Smartphone Mod", price: 800, category: "phones", rating: 4.5 },
        { id: 3, title: "Audio Pro", price: 150, category: "audio", rating: 4.2 }
      ];
      resolve(mockData);
    }, 500);
  });
}

function render() {
  const filtered = filterProducts(state.products, state.search, state.category);
  const sorted = sortProducts(filtered, state.sortBy);
  renderProducts(sorted);
}

document.addEventListener("DOMContentLoaded", () => {
  mockFetchProducts()
    .then(data => {
      state.products = data;
      state.status = "success";
      render();
    })
    .catch(err => {
      state.status = "error";
      console.error(err);
    });

  document.querySelector("#search-input")?.addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
  });
});
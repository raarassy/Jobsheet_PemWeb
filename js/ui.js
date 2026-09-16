export function renderProducts(products) {
  const container = document.querySelector("#product-list");
  if (!container) return;

  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = "<p class='empty-msg'>Produk tidak ditemukan.</p>";
    return;
  }

  for (const product of products) {
    const { title, category, price, rating, stock, thumbnail } = product;
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${thumbnail}" alt="${title}">
      <h3>${title}</h3>
      <p><strong>Kategori:</strong> ${category}</p>
      <p><strong>Harga:</strong> $${price}</p>
      <p><strong>Stok:</strong> ${stock}</p>
      <p><strong>Rating:</strong> ⭐ ${rating}</p>
    `;
    container.append(card);
  }
}

export function renderStatistics(stats) {
  const statsContainer = document.querySelector("#stats-container");
  if (!statsContainer) return;

  statsContainer.innerHTML = `
    <div class="stat-box"><strong>Total Produk:</strong> ${stats.totalProducts}</div>
    <div class="stat-box"><strong>Rata-rata Harga:</strong> $${stats.averagePrice}</div>
    <div class="stat-box"><strong>Harga Tertinggi:</strong> $${stats.highestPrice}</div>
    <div class="stat-box"><strong>Total Stok:</strong> ${stats.totalStock}</div>
    <div class="stat-box"><strong>Rata-rata Rating:</strong> ⭐ ${stats.averageRating}</div>
  `;
}
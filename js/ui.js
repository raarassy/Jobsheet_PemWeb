export function renderProducts(products) {
  const container = document.querySelector("#product-list");
  if (!container) return;

  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = "<p>Produk tidak ditemukan.</p>";
    return;
  }

  for (const product of products) {
    const { title, category, price, rating } = product;
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <h3>${title}</h3>
      <p>Kategori: ${category}</p>
      <p>Harga: $${price}</p>
      <p>Rating: ⭐ ${rating}</p>
    `;
    container.append(card);
  }
}
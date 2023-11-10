function displayProducts() {
  fetch("https://striveschool-api.herokuapp.com/api/product", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjA2NTI1NGU4ODAwMTgzZjE4YTUiLCJpYXQiOjE2OTk2MDY2MjksImV4cCI6MTcwMDgxNjIyOX0.wR13qNrrl2RR3TuVhJDmzi-DXk6rSBglq1DJIsJ8nQk"
    }
  })
    .then((response) => response.json())
    .then((products) => {
      const productListContainer = document.getElementById("productList");
      products.forEach((product) => {
        const productCard = `
                              <div class="col-md-4 mb-4">
                                  <div class="card h-100">
                                      <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}" style="height: 270px; object-fit: cover;">
                                      <div class="card-body">
                                          <h5 class="card-title">${product.name}</h5>
                                          <p class="card-text">${product.description}</p>
                                          <p class="card-text">Prezzo: ${product.price} €</p>    
                                          <button type="button" class="btn btn-primary" onclick="redirectToDetails('${product._id}')">Scopri di più</button>    
                                      </div>
                                  </div>
                              </div>
                          `;
        productListContainer.innerHTML += productCard;
      });
    })
    .catch((error) => {
      console.error("Recupero dei prodotti fallito:", error);
    });
}
function redirectToDetails(productId) {
  window.location.href = `details.html?productId=${productId}`;
}
displayProducts();
function removeProductCard(productId) {
  const productCard = document.getElementById(`productCard_${productId}`);
  if (productCard) {
    productCard.remove();
  }
}

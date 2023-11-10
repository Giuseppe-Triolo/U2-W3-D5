const productId = getProductIdFromURL();
const apiUrl = `https://striveschool-api.herokuapp.com/api/product/${productId}`;

fetch(apiUrl, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjA2NTI1NGU4ODAwMTgzZjE4YTUiLCJpYXQiOjE2OTk2MDY2MjksImV4cCI6MTcwMDgxNjIyOX0.wR13qNrrl2RR3TuVhJDmzi-DXk6rSBglq1DJIsJ8nQk"
  }
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Errore Status: ${response.status}`);
    }
    return response.json();
  })
  .then((product) => {
    const productDetailsContainer = document.getElementById("productDetailsContainer");

    const productCard = `
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}" style="height: 270px; object-fit: cover;">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text">Prezzo: ${product.price} €</p>
                  <p class="card-text">Marca: ${product.brand}</p>
                  <!-- Aggiunto un pulsante per il ritorno alla Homepage -->
                  <button type="button" class="btn btn-primary" onclick="redirectToHomepage()">Torna alla Homepage</button>
                </div>
              </div>
            </div>
          `;

    productDetailsContainer.innerHTML += productCard;
  })
  .catch((error) => {
    console.error("Dettagli dell'errore:", error.message);
  });

function getProductIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("productId");
}

function redirectToHomepage() {
  window.location.href = "homepage.html";
}

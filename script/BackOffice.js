function addProduct() {
  const formData = {
    name: document.getElementById("name").value,
    price: parseFloat(document.getElementById("price").value),
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imageUrl").value
  };

  fetch("https://striveschool-api.herokuapp.com/api/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjA2NTI1NGU4ODAwMTgzZjE4YTUiLCJpYXQiOjE2OTk2MDY2MjksImV4cCI6MTcwMDgxNjIyOX0.wR13qNrrl2RR3TuVhJDmzi-DXk6rSBglq1DJIsJ8nQk"
    },
    body: JSON.stringify(formData)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Errore Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Prodotto aggiunto con successo:", data);
    })
    .catch((error) => {
      console.error("Dettagli dell'errore:", error.message);
    });
}

function updateProduct() {
  const productId = document.getElementById("productId").value;
  if (!productId) {
    alert("Inserisci l'ID del prodotto da aggiornare.");
    return;
  }

  const formData = {
    name: document.getElementById("name").value,
    price: parseFloat(document.getElementById("price").value),
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imageUrl").value
  };

  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjA2NTI1NGU4ODAwMTgzZjE4YTUiLCJpYXQiOjE2OTk2MDY2MjksImV4cCI6MTcwMDgxNjIyOX0.wR13qNrrl2RR3TuVhJDmzi-DXk6rSBglq1DJIsJ8nQk"
    },
    body: JSON.stringify(formData)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Errore durante l'aggiornamento del prodotto: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Prodotto aggiornato:", data);
    })
    .catch((error) => {
      console.error(error.message);
    });
}
function deleteProduct() {
  const productId = document.getElementById("deleteProductId").value;

  if (!productId) {
    alert("Inserisci l'ID del prodotto da cancellare.");
    return;
  }

  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjA2NTI1NGU4ODAwMTgzZjE4YTUiLCJpYXQiOjE2OTk2MDY2MjksImV4cCI6MTcwMDgxNjIyOX0.wR13qNrrl2RR3TuVhJDmzi-DXk6rSBglq1DJIsJ8nQk"
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Errore durante la cancellazione del prodotto. Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Prodotto cancellato con successo:", data);
    })
    .catch((error) => {
      console.error("Dettagli dell'errore:", error.message);
    });
}
function resetForm() {
  document.getElementById("addProductForm").reset();
}

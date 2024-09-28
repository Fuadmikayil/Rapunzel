const cardsWrapper = document.querySelector('.cards-wrapper');

// Step 1 Fetch
const response = await fetch('https://fakestoreapi.com/products');
// Step 2 convert response to json
const products = await response.json();
// Step Show Data(products)
products.map((item) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `<img src=${item.image} alt="">
                            <h2>${item.title.slice(0, 10)}...</h2>
                            <p>${item.category}</p>
                            <button>Rate:${item.rating.rate} -  Stock: ${
    item.rating.count
  }</button>`;

  cardsWrapper.appendChild(card);
});
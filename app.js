const cardsWrapper = document.querySelector(".cards-wrapper");

fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then((Praducts) => {
        Praducts.map(item => {
            const card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML = ` <img src= ${item.image} alt=" "  
    <h2> ${item.title.slice(0, 10)} ...</h2> 
    <p> ${item.category} ...</p> 
    <button> ${item.rating.rate} - Stconk: ${item.rating.count}</button> 
      `
            cardsWrapper.appendChild(card)
        });
        
    });


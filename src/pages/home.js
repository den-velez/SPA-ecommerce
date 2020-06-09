import items from "../utils/data";

function Home() {
  return `
    <section class="itemsContainer">
    ${items
      .map(
        (item) => `
    <article class="item">
          <h3 class="item-name">${item.name}</h3>
          <figure class="item-imgBox"><img src="${item.photo1}" alt="${item.name}"/></figure>
          <button class="item-btn"><img src="./src/images/cart.svg" alt="add cart"/><span>add</span></button>
          <div class="item-brand"> <span>${item.brand}</span></div>
          <button  class="item-details" onclick="modal()" >+info</button><span class="item-price">${item.price}</span>
        </article>
    `
      )
      .join("")}
    </section> `;
}

export default Home;

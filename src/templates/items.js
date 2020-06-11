function Items(array) {
  return `
    <section class="itemsContainer">
    ${array
      .map(
        (item) => `
        <article class="item">
        <h3 class="item-name">${item.name}</h3>
        <figure class="item-imgBox"><img src="${item.photo1}" alt="${item.name}"/></figure>
        <button class="item-btn" name="add${item.id}"><img src="./src/images/cart.svg" alt="add cart" name="add${item.id}"/><span id="add${item.id}" >add</span></button>
        <div class="item-brand"> <span>${item.brand}</span></div>
        <button name="info${item.id}" class="item-details"  >+info</button><span class="item-price">$ ${item.price}</span>
        </article>
        `
      )
      .join("")}
        </section> `;
}

export default Items;

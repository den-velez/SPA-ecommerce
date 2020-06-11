const CartItems = (content, totals) => {
  return `
  <div class="cartActions"><span>Vaciar Carrito</span>
  <button class="cartActions-btn" name="emptyCart" ><img src="./src/images/borrar.svg" alt="Borrar Todo" name="emptyCart"/></button>
</div>
<div class="cartTitle"><span></span><span></span>
  <div class="cartTitle-item"><span>Nombre</span><span>Marca</span><span>Precio</span></div>
  <div class="cartTitle-cart"><span>Cantidad</span><span>Total </span></div>
</div>
${content
  .map(
    (item) => `
  <div class="cartContainer">
  <button name="removeone" id="${item.id}">-</button>
  <figure class="cartContainer-imgBox"><img src="${item.photo1}" alt="image of ${item.name}"/></figure>
  <div class="cartContainer-details"><span class="cartContainer-details-text">${item.name}</span><span class="cartContainer-details-text">${item.brand}</span><span class="cartContainer-details-price">$${item.price}</span></div>
  <div class="cartContainer-oncart">
    <input id="${item.id}"name="cartcount" class="cartContainer-oncart-counter" type="number" value="${item.counter}"/><span class="cartContainer-oncart-total">$${item.total}</span>
  </div>
</div>`
  )
  .join("")}
<div class="cartTotals"><span></span><span></span>
  <div class="cartTitle-item"><span> </span></div>
  <div class="cartTitle-cart"><span>${totals.counter}</span><span>$${
    totals.total
  }</span></div>
</div>`;
};

export default CartItems;

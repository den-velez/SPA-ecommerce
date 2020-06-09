const Cart = () => {
  const view = `
  <div class="cartActions"><span>Vaciar Carrito</span>
  <button class="cartActions-btn"><img src="../images/borrar.svg" alt="Borrar Todo"/></button>
</div>
<div class="cartTitle"><span></span><span></span>
  <div class="cartTitle-item"><span>Name</span><span>Brand</span><span>Price</span></div>
  <div class="cartTitle-cart"><span>Cantidad</span><span>Total </span></div>
</div>
<div class="cartContainer">
  <button>-</button>
  <figure class="cartContainer-imgBox"><img src="../images/hero.svg" alt=""/></figure>
  <div class="cartContainer-details"><span class="cartContainer-details-text">Name</span><span class="cartContainer-details-text">Brand</span><span class="cartContainer-details-price">$300</span></div>
  <div class="cartContainer-oncart">
    <input class="cartContainer-oncart-counter" type="text"/><span class="cartContainer-oncart-total">$3,000</span>
  </div>
</div>
<div class="cartTotals"><span></span><span></span>
  <div class="cartTitle-item"><span> </span></div>
  <div class="cartTitle-cart"><span>Cantidad</span><span>Total </span></div>
</div>
  `;
  return view;
};

export default Cart;

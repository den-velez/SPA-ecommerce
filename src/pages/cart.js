const Cart = () => {
  const view = `
  <div class="cartTitle" id="cartTitle">
      <span></span><span></span>
      <div class="cartTitle-item">
        <span>Name</span><span>Brand</span><span>Price</span>
      </div>
      <div class="cartTitle-cart"><span>Items</span><span>Total </span></div>
    </div>
    <div class="cartContainer" id="cartItems">
      <button><img src="../images/borrar.svg" alt="" /></button>
      <figure class="cartContainer-imgBox">
        <img src="../images/hero.svg" alt="" />
      </figure>
      <div class="cartContainer-details">
        <span class="cartContainer-details-text">Name</span
        ><span class="cartContainer-details-text">Brand</span
        ><span class="cartContainer-details-price">$300</span>
      </div>
      <div class="cartContainer-oncart">
        <span class="cartContainer-oncart-counter">10</span
        ><span class="cartContainer-oncart-total">$3,000</span>
      </div>
    </div>
  `;
  return view;
};

export default Cart;

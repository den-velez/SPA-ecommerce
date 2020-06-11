const Header = (cart) => {
  return `  
  <a href="#/inicio" class="header-logo"><span>denStore</span></a>
  <div class="header-menu">
    <a href="#/nuevosproductos"name="releases" class="header-menu-items"><span>Productos Nuevos</span></a>
    <a href="#/promociones"name="promotions" class="header-menu-items"><span>Promociones</span></a>
  </div>
  <div class="header-cart">
    <a href="#/cart"class="header-cart-title">
      <img src="./src/images/cart.svg" alt="go to cart" />
    </a>
    <div class="header-cart-counter"><span>Carrito</span><span>(${cart.counter})</span></div>
    <span class="header-cart-total">$${cart.total}</span>
  </div>`;
};

export default Header;

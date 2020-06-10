const Header = (cart) => {
  return `  
  <a href="/" class="header-logo"><span>denStore</span></a>
      <ul class="header-menu">
        <li class="header-menu-items">
          <button name="releases">New Releases</button>
        </li>
        <li class="header-menu-items">
          <button name="promotions">Promotions</button>
        </li>
      </ul>
      <div class="header-cart">
        <a href="#/cart"class="header-cart-title">
          <img src="./src/images/cart.svg" alt="go to cart" />
        </a>
        <div class="header-cart-counter"><span>Cart</span><span>(${cart.counter})</span></div>
        <span class="header-cart-total">$${cart.total}</span>
      </div>`;
};

export default Header;

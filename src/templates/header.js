const Header = () => {
  return `  
  <div class="header-logo"><span>denStore</span></div>
      <ul class="header-menu">
        <li class="header-menu-items">
          <button>New Releases</button>
        </li>
        <li class="header-menu-items">
          <button>Promotions</button>
        </li>
      </ul>
      <div class="header-cart">
        <button class="header-cart-title">
          <img src="./src/images/cart.svg" alt="" />
        </button>
        <div class="header-cart-counter"><span>Cart</span><span>(1)</span></div>
        <span class="header-cart-total">$9000</span>
      </div>`;
};

export default Header;

class CartFilter {
  addcart(item) {
    let cartDataHeader = JSON.parse(sessionStorage.getItem("cartTotals"));
    let cartContent = JSON.parse(sessionStorage.getItem("cartContent"));
    cartDataHeader.counter += 1;
    cartDataHeader.totals = cartDataHeader.totals + item.price;
    cartContent.push(item);
    sessionStorage.setItem("cartTotals", JSON.stringify(cartDataHeader));
    sessionStorage.setItem("cartContent", JSON.stringify(cartContent));
  }

  removecart() {}

  updatecart() {}
}

export default CartFilter;

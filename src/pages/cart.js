import CartItems from "../templates/cartItems";

const Cart = () => {
  const content = document.getElementById("itemsContainer");
  const searcher = document.getElementById("searcher");
  searcher.innerHTML = "";

  const cartContent = JSON.parse(sessionStorage.getItem("cartContent"));
  const cartTotals = JSON.parse(sessionStorage.getItem("cartTotals"));

  content.innerHTML = CartItems(cartContent, cartTotals);
};

export default Cart;

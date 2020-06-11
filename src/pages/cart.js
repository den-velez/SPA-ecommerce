import CartFilter from "../utils/cartFilter";
import CartItems from "../templates/cartItems";

const Cart = () => {
  const content = document.getElementById("itemsContainer");
  const searcher = document.getElementById("searcher");
  searcher.innerHTML = "";
  content.innerHTML = CartItems(
    [
      {
        id: 1,
        name: "cafe",
        brand: "International",
        price: 30,
        photo1: "./src/images/cafe.svg",
        counter: 1,
        total: 30,
      },
    ],
    { counter: 6, total: 370 }
  );
};

export default Cart;

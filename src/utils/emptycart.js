import Header from "../templates/header";
import Cart from "../pages/cart";

const EmptyCart = (iditem) => {
  const empty = [];
  const empty2 = { counter: 0, total: 0 };

  const header = document.getElementById("header");

  sessionStorage.setItem("cartTotals", JSON.stringify(empty2));
  sessionStorage.setItem("cartContent", JSON.stringify(empty));

  header.innerHTML = Header(empty2);
  Cart();
};

export default EmptyCart;

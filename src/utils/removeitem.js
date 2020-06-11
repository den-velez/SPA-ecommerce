import Header from "../templates/header";
import Cart from "../pages/cart";

const RemoveItem = (iditem) => {
  console.log("removing");
  const header = document.getElementById("header");
  const cartTotals = { counter: 0, total: 0 };
  const cartContent = JSON.parse(sessionStorage.getItem("cartContent"));

  const nuevoCart = cartContent.filter((item) => item.id != iditem);

  for (let x of nuevoCart) {
    cartTotals.counter = cartTotals.counter + x.counter;
    cartTotals.total = cartTotals.total + x.total;
  }

  sessionStorage.setItem("cartTotals", JSON.stringify(cartTotals));
  sessionStorage.setItem("cartContent", JSON.stringify(nuevoCart));
  header.innerHTML = Header(cartTotals);
  Cart();
};

export default RemoveItem;

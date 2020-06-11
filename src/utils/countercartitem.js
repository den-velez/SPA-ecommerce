import Header from "../templates/header";
import Cart from "../pages/cart";

const CounterCarItem = (iditem, value) => {
  const header = document.getElementById("header");
  const cartTotals = JSON.parse(sessionStorage.getItem("cartTotals"));
  const cartContent = JSON.parse(sessionStorage.getItem("cartContent"));

  for (let x of cartContent) {
    if (x.id == iditem) {
      const totalNuevo = x.price * value;
      const totalDif = totalNuevo - x.total;
      const counterDif = value - x.counter;
      x.counter = value;
      x.total = x.price * value;

      cartTotals.counter = cartTotals.counter + counterDif;
      cartTotals.total = cartTotals.total + totalDif;
    }
  }

  sessionStorage.setItem("cartContent", JSON.stringify(cartContent));
  sessionStorage.setItem("cartTotals", JSON.stringify(cartTotals));

  header.innerHTML = Header(cartTotals);
  Cart();
};

export default CounterCarItem;

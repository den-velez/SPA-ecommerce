import Header from "../templates/header";
import data from "../utils/data";

const AddCart = (iditem) => {
  const header = document.getElementById("header");
  const cartTotals = JSON.parse(sessionStorage.getItem("cartTotals"));
  const cartContent = JSON.parse(sessionStorage.getItem("cartContent"));

  const producto = data.filter((item) => item.id == iditem);

  const verificar = cartContent.filter((item) => item.id == iditem);
  if (verificar.length > 0) {
    const item = verificar[0].id;
    console.log(item);
    for (let x of cartContent) {
      if (x.id == item) {
        x.counter += 1;
        x.total = x.total + x.price;
        cartTotals.total = cartTotals.total + x.price;
      }
    }
  } else {
    const agregar = {
      id: producto[0].id,
      image: producto[0].photo1,
      name: producto[0].name,
      brand: producto[0].brand,
      price: producto[0].price,
      counter: 1,
      total: producto[0].price,
    };
    cartTotals.total = cartTotals.total + agregar.price;
    cartContent.push(agregar);
  }

  cartTotals.counter += 1;
  header.innerHTML = Header(cartTotals);

  sessionStorage.setItem("cartTotals", JSON.stringify(cartTotals));
  sessionStorage.setItem("cartContent", JSON.stringify(cartContent));
};
export default AddCart;

import data from "../utils/data";
import Header from "../templates/header";

const ModalAddMinus = (name) => {
  const header = document.getElementById("header");
  const modalCounter = document.getElementById("modalCartCounter");
  const modalTotal = document.getElementById("modalCartTotal");
  const cartTotals = JSON.parse(sessionStorage.getItem("cartTotals"));
  const cartContent = JSON.parse(sessionStorage.getItem("cartContent"));
  const addMin = 1 * name.slice(5, 6);
  const itemselected = 1 * name.slice(6, 7);
  const db = data;
  const onCart = cartContent.filter((item) => item.id == itemselected);

  // console.log(onCart[0]);
  // console.log(onCart.length);
  //minus1 / add 2

  if (onCart.length > 0) {
    let updateCounter = 0;
    let updateTotal = 0;
    if (addMin === 1) {
      updateCounter = onCart[0].counter > 0 ? -1 : 0;
      updateTotal = onCart[0].counter > 0 ? -1 * onCart[0].price : 0;
    } else {
      updateCounter = 1;
      updateTotal = onCart[0].price;
    }
    cartTotals.counter = 1 * cartTotals.counter + updateCounter;
    cartTotals.total = 1 * cartTotals.total + updateTotal;

    for (let x of cartContent) {
      if (x.id === itemselected) {
        x.counter = 1 * x.counter + updateCounter;
        x.total = 1 * x.total + updateTotal;
        modalCounter.innerHTML = x.counter;
        modalTotal.innerHTML = "$" + x.total;
      }
    }
    header.innerHTML = Header(cartTotals);
  } else if (onCart.length === 0 && addMin === 2) {
    const itemdata = db.filter((item) => item.id == itemselected);
    const item = {
      id: itemdata[0].id,
      name: itemdata[0].name,
      brand: itemdata[0].brand,
      price: itemdata[0].price,
      counter: 1,
      total: itemdata[0].price,
      photo1: itemdata[0].photo1,
    };
    // console.log(item);
    // console.log(itemdata);

    cartTotals.counter += 1;
    cartTotals.total = cartTotals.total + itemdata[0].price;
    cartContent.push(item);

    header.innerHTML = Header(cartTotals);
    modalCounter.innerHTML = 1;
    modalTotal.innerHTML = "$" + itemdata[0].price;
  } else {
    console.log("caca");
    return;
  }
  sessionStorage.setItem("cartTotals", JSON.stringify(cartTotals));
  sessionStorage.setItem("cartContent", JSON.stringify(cartContent));
};

export default ModalAddMinus;

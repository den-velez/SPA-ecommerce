import router from "./routes";
import HeaderBtns from "./utils/headerbtns";
import Search from "./utils/search";
import ModalOpen from "./utils/modalOpen";
import ModalClose from "./utils/modalClose";
import AddCart from "./utils/addcart";

let cartTotals = {
  counter: 0,
  total: 0,
};
let cartContent = [
  // {
  //   id: 0,
  //   image: url,
  //   name: 0,
  //   brand: 0,
  //   price: 0,
  //   counter: 0,
  //   total: 0,
  // },
];

sessionStorage.setItem("cartTotals", JSON.stringify(cartTotals));
sessionStorage.setItem("cartContent", JSON.stringify(cartContent));

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
window.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    ModalClose();
  }
});

window.addEventListener("click", (element) => {
  const name = element.target.name;
  const id = element.target.id;
  const name2 = name ? name.slice(0, 4) : "";
  const nameadd = name ? name.slice(0, 3) : "";
  const idadd = id ? id.slice(0, 3) : "";

  // console.log(id);
  if (name === "releases") {
    HeaderBtns(name);
  } else if (name === "promotions") {
    HeaderBtns(name);
  } else if (nameadd === "add" || idadd === "add") {
    const iditem = name ? name.slice(3, 4) : id.slice(3, 4);
    AddCart(iditem);
  } else if (id === "modalContainer") {
    ModalClose();
  } else if (name2 === "info") {
    const item = name ? name.slice(4, 5) : "";
    ModalOpen(item);
  }
  //  else if (name === "adddd" || id === "adffd") {
  // } else if (name === "removeone") {
  //   //discount 1 piece
  // } else if (name === "like") {
  //   //increase likes
  // } else if (name === "dislike") {
  //   //incresase disliks
  // } else if (name === "picture") {
  //   //reemplezaar imagen
  // }

  //update cart
  //render(ya sea home o cart)
});

window.addEventListener("change", (element) => {
  const name = element.target.name;
  const value = element.target.value;
  console.log(value);
  if (name === "searcher") {
    Search(value);
  } else if (name == "countercart") {
    //update cart
  }

  //update cart
  //render
});

import router from "./routes";
import HeaderBtns from "./utils/headerbtns";
import Search from "./utils/search";

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

window.addEventListener("click", (element) => {
  const name = element.target.name;
  console.log(name);
  // const namespan = element.textContent;

  if (name === "releases") {
    HeaderBtns(name);
    //incluir retunr para terminar la fn
  } else if (name === "promotions") {
    HeaderBtns(name);
    //incluir retunr para terminar la fn
  } else if (name === "gotocart") {
    //mostrar cart (only with items)
    //incluir retunr para terminar la fn
  } else if (name === "add") {
    //incluye agregar item o sumar 1
    //agregar al carrito
  } else if (name === "abrir modal") {
    //mostrar modal
  } else if (name === "vaciar cart") {
    //vaciar cart
  } else if (name === "borrar item of cart") {
    //borrra item of the cart
  } else if (name === "removeone") {
    //discount 1 piece
  } else if (name === "like") {
    //increase likes
  } else if (name === "dislike") {
    //incresase disliks
  } else if (name === "picture") {
    //reemplezaar imagen
  }

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

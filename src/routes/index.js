import Header from "../templates/header";
import Hero from "../templates/hero";
import Cart from "../pages/cart";
import Footer from "../templates/footer";
import Error404 from "../pages/error404";
import Home from "../pages/home";
import ResolveRoute from "../utils/resolveRoute";

const routes = {
  "/": Home,
  "/cart": Cart,
  "/404": Error404,
  "/promociones": Home,
  "/nuevosproductos": Home,
  "/inicio": Home,
};

const router = () => {
  const url = location.hash.slice(1).split("/")[1] || "";
  const route = ResolveRoute(url);

  const cartDataHeader = JSON.parse(sessionStorage.getItem("cartTotals"));
  const header = document.getElementById("header");
  const hero = document.getElementById("hero");
  const footer = document.getElementById("footer");
  let render = routes[route];

  header.innerHTML = Header(cartDataHeader);
  hero.innerHTML = Hero();
  render();
  footer.innerHTML = Footer();
};

export default router;

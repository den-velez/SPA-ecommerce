import Header from "../templates/header";
import Hero from "../templates/hero";
import Modal from "../templates/modal";
import Footer from "../templates/footer";
import Home from "../pages/home";
import Error404 from "../pages/error404";
import Cart from "../pages/cart";

const routes = {
  "/": Home,
  "/cart": Cart,
};
const router = () => {
  const header = null || document.getElementById("header");
  const hero = null || document.getElementById("hero");
  const footer = null || document.getElementById("footer");

  header.innerHTML = Header();
  hero.innerHTML = Hero();
  //pendiente ver logic<

  footer.innerHTML = Footer();
};

export default router;

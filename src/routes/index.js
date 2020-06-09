import Header from "../templates/header";
import Hero from "../templates/hero";
import Footer from "../templates/footer";
import Home from "../pages/home";
import Error404 from "../pages/error404";
import Cart from "../pages/cart";

const routes = {
  "/": Home,
  "/cart": Cart,
};
const router = () => {
  const header = document.getElementById("header");
  const hero = document.getElementById("hero");
  const content = document.getElementById("mainContainer");
  const footer = document.getElementById("footer");

  header.innerHTML = Header();
  hero.innerHTML = Hero();
  content.innerHTML = Home();
  footer.innerHTML = Footer();
};

export default router;

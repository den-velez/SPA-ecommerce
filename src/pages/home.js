import Searcher from "../templates/searcher";
import Items from "../templates/items";
import ItemsFilter from "../utils/itemsFilter";
import data from "../utils/data";

const Home = () => {
  const searcher = document.getElementById("searcher");
  const content = document.getElementById("itemsContainer");
  const url = location.hash.slice(1).split("/")[1] || "";
  const filter = new ItemsFilter();
  const btnOptions = {
    promociones: "Promociones",
    nuevosproductos: "Nuevos",
    inicio: "inicio",
  };
  let btn = "";

  if (url === "" || url === "inicio") {
    searcher.innerHTML = Searcher();
    content.innerHTML = Items(data);
  } else {
    btn = btnOptions[url];

    const results = filter.filtered(data, btn);
    console.log(btn);
    searcher.innerHTML = Searcher();
    filter.renderTitle(btn);
    content.innerHTML = Items(results);
  }
};

export default Home;

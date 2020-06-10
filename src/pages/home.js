import Searcher from "../templates/searcher";
import Items from "../templates/items";
import ItemsFilter from "../utils/itemsFilter";
import data from "../utils/data";

const Home = () => {
  const searcher = document.getElementById("searcher");
  const content = document.getElementById("itemsContainer");

  // const fi = new ItemsFilter();
  // const btn = "releases";
  // const se = "";
  // const results = fi.filtered(data, btn);
  // // const results = fi.search(data, se);
  // fi.renderTitle(btn);

  searcher.innerHTML = Searcher();
  content.innerHTML = Items(data);
};

export default Home;

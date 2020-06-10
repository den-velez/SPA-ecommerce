import Items from "../templates/items";
import ItemsFilter from "./itemsFilter";
import data from "./data";

const HeaderBtns = (btn) => {
  const content = document.getElementById("itemsContainer");
  const filter = new ItemsFilter();

  const results = filter.filtered(data, btn);
  filter.renderTitle(btn);
  content.innerHTML = Items(results);
};

export default HeaderBtns;

// const se = "";
// const results = fi.search(data, se);

import Items from "../templates/items";
import ItemsFilter from "./itemsFilter";
import NoResults from "../templates/noresults";
import data from "./data";

const Search = (value) => {
  console.log(value);
  const content = document.getElementById("itemsContainer");
  const filter = new ItemsFilter();
  const results = filter.search(data, value);

  content.innerHTML = results.length != 0 ? Items(results) : NoResults();
};

export default Search;

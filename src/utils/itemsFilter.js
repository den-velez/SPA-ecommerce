class ItemsFilter {
  filtered(array, btn) {
    const db = array;
    if (btn === "releases") {
      return db.filter((item) => item.newRelease);
    } else if (btn === "promotions") {
      return db.filter((item) => item.promotions);
    } else {
      return db;
    }
  }

  renderTitle(btn) {
    const element = document.getElementById("Category");
    if (btn === "promotions") {
      element.innerHTML = "Promociones";
    } else if (btn === "releases") {
      element.innerHTML = "Nuevos";
    } else {
      element.innerHTML = "Catalogo";
    }
  }

  search(array, search) {
    const db = array;
    const usersearch = search || null;

    const results = db.filter((item) => item.name.includes(search));
    if (results) {
      return results;
    } else {
      return db;
    }
  }
}

export default ItemsFilter;

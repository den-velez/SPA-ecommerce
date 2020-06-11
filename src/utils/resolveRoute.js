const ResolveRoute = (route) => {
  const routes = {
    cart: "/cart",
    promociones: "/promociones",
    nuevosproductos: "/nuevosproductos",
    inicio: "/inicio",
  };
  if (route === "") {
    return `/`;
  } else {
    for (let x in routes) {
      if ((x = route)) {
        return `/${route}`;
      } else {
        return `/404`;
      }
    }
  }
};
export default ResolveRoute;

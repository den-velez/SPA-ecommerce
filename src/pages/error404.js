const Error404 = () => {
  const content = document.getElementById("itemsContainer");

  content.innerHTML = `
  <div class="Error404">
    <h2>Error 404</h2>
    <p>UPS, Pagina no encontrada</p>
  <div>
  `;
};

export default Error404;

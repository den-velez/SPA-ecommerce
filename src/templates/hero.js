const Hero = () => {
  return ` 
  <section class="hero">
        <figure class="hero-imgContainer">
          <img src="./src/images/hero.svg" alt="big photo" />
        </figure>
      </section>
      <section class="actions">
        <h2 class="actions-category">New Releases</h2>
        <div class="actions-searcher">
          <input type="text" placeholder="busca un articulo" />
        </div>
      </section>
      <section class="itemsContainer"></section>`;
};

export default Hero;

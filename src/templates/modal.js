const Modal = () => {
  const container = document.getElementById("modalContainer");
  container.classList.remove("hide");
  return `
  <div class="modal">
  <figure class="modal-imgBox"><img src="../images/hero.svg" alt=""/></figure>
  <div class="modal-info"><span class="modal-info-name">Name</span><span class="modal-info-price">Price</span>
    <div class="modal-info-btns">
      <button><img src="../images/like.svg" alt="like button"/></button>
      <button><img src="../images/hand.svg" alt="dislike button"/></button><span>10</span><span>5</span>
    </div>
  </div>
  <figure class="modal-gallery">
    <button class="modal-gallery-btn"><img src="../images/hero.svg" alt="product's photo 1"/></button>
    <button class="modal-gallery-btn"><img src="../images/hero.svg" alt="product's photo 2"/></button>
    <button class="modal-gallery-btn"><img src="../images/hero.svg" alt="product's photo 3"/></button>
  </figure>
  <div class="modal-aside">
    <h3>Agregar al carrito</h3>
    <div class="modal-aside-buying">
      <div class="modal-aside-buying-btns">
        <button>-</button>
        <button>+</button>
      </div><span class="modal-aside-buying-counter">10</span><span class="modal-aside-buying-toPay">$300</span>
    </div>
    <p class="modal-aside-description">Descripcion completa</p>
  </div>
</div>
  `;
};

export default Modal;

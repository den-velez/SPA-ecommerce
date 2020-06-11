const Modal = (obj) => {
  const cartContent = JSON.parse(sessionStorage.getItem("cartContent"));

  const producto = cartContent.filter((item) => item.id == obj.id);
  const counter = producto.length > 0 ? producto[0].counter : 0;
  const total = producto.length > 0 ? producto[0].total : 0;

  return `
  <div name="modal"class="modal">
  <figure class="modal-imgBox"><img src="${obj.photo1}" alt="photo of ${obj.name}"/></figure>
  <div class="modal-info"><span class="modal-info-name">${obj.name}</span><span class="modal-info-price">$ ${obj.price}</span>
    <div class="modal-info-btns">
      <button name="like1${obj.id}"><img name="like1${obj.id}" src="./src/images/like.svg" alt="like button"/></button>
      <button name="like2${obj.id}"><img name="like2${obj.id}" src="./src/images/hand.svg" alt="dislike button"/></button><span id="likecounter">${obj.likes}</span><span id="dislikecounter">${obj.dislikes}</span>
    </div>
  </div>
  <figure class="modal-gallery">
    <button class="modal-gallery-btn"><img src="${obj.photo1}" alt="product's photo 1"/></button>
    <button class="modal-gallery-btn"><img src="${obj.photo2}" alt="product's photo 2"/></button>
    <button class="modal-gallery-btn"><img src="${obj.photo3}" alt="product's photo 3"/></button>
  </figure>
  <div class="modal-aside">
    <h3>Agregar al carrito</h3>
    <div class="modal-aside-buying">
      <div class="modal-aside-buying-btns">
        <button>-</button>
        <button>+</button>
      </div><span class="modal-aside-buying-counter">${counter}</span><span class="modal-aside-buying-toPay">$${total}</span>
    </div>
    <p class="modal-aside-description">${obj.description}</p>
  </div>
</div>
  `;
};

export default Modal;

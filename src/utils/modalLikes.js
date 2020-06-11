import data from "./data";

const ModalLikes = (name) => {
  //like 1 dislike2
  const opinion = name.slice(4, 5);
  const itemselected = 1 * name.slice(5, 6);

  const producto = data.filter((item) => item.id == itemselected);

  // console.log(opinion);

  if (opinion == 1) {
    const element = document.getElementById("likecounter");
    const nuevo = (producto[0].likes += 1);
    element.innerHTML = nuevo;
  } else {
    const element = document.getElementById("dislikecounter");
    const nuevo = (producto[0].dislikes += 1);
    element.innerHTML = nuevo;
  }
};

export default ModalLikes;

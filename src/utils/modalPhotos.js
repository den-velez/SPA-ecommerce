import data from "./data";

const ModalPhotos = (name) => {
  //which one?
  const opinion = 1 * name.slice(4, 5);
  const itemselected = 1 * name.slice(5, 6);

  const mainPhoto = document.getElementById(`mainphoto${itemselected}`);
  const itemSeleted = data.filter((item) => item.id == itemselected);

  let newPhoto;
  if (opinion === 1) {
    newPhoto = itemSeleted[0].photo1;
  } else if (opinion === 2) {
    newPhoto = itemSeleted[0].photo2;
  } else {
    newPhoto = itemSeleted[0].photo3;
  }
  mainPhoto.setAttribute("src", newPhoto);
};

export default ModalPhotos;

import Modal from "../templates/modal";
import data from "../utils/data";

function ModalOpen(id) {
  const results = data.filter((item) => item.id == id);
  const container = document.getElementById("modalContainer");
  container.classList.remove("hide");
  container.innerHTML = Modal(results[0]);
}

export default ModalOpen;

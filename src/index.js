import router from "./routes";
import Home from "./pages/home";

window.addEventListener("load", router);
// document.addEventListener("click", Modal);

function modal() {
  const modal = document.querySelectorAll("items-details");
  modal.forEach((element) => {
    element.addEventListener("click", () => {
      // element.classList.toggle("hide");
      console.log("testing");
    });
  });
}

const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const modalButtonCasino = document.querySelectorAll(".modal-button-casino");
const modalButtonM = document.querySelector(".modal-button-m");
const closeButton = document.querySelector(".close-button");
const scrollDown = document.querySelector(".scroll-down");
let isOpened = false;

const openModal = () => {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
};

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
modalButtonM.addEventListener("click", openModal);

if (document.body.classList.contains('casino')) {
for (let index = 0; index < modalButtonCasino.length; index++) {
	modalButtonCasino[index].addEventListener("click", openModal);
}
}

document.onkeydown = evt => {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};

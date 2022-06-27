import React from "react";

const InfoModal = (props) => {
  return (
    <div className="modal">
      <h1>TEST</h1>
      <div className="modal-header">
        <div className="title">Modal Title</div>
        <button data-close-button className="close-button">
          &times;
        </button>
      </div>
      <div className="modal-body">Modal Body</div>
    </div>
  );
};

export default InfoModal;

//   const openModalButtons = document.querySelectorAll("[data-modal-target]");
//   const closeModalButtons = document.querySelectorAll("[data-close-button]");
//   const overlay = document.getElementById("overlay");

//   openModalButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const modal = document.querySelector(button.dataset.modalTarget);
//       openModal(modal);
//     });
//   });
//   closeModalButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const modal = button.closest(".modal");
//       closeModal(modal);
//     });
//   });

//   // overlay.addEventListener("click", () => {
//   //   const modals = document.querySelectorAll(".modal.active");
//   //   modals.forEach((modal) => {
//   //     closeModal(modal);
//   //   });
//   // });

//   function openModal(modal) {
//     if (modal == null) return;
//     modal.classList.add("active");
//     overlay.classList.add("active");
//   }
//   function closeModal(modal) {
//     if (modal == null) return;
//     modal.classList.remove("active");
//     overlay.classList.remove("active");
//   }

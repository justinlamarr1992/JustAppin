import React from "react";
import { RiCloseLine } from "react-icons/ri";

const InfoModal = ({ setIsOpen, title, Title, body, Body }) => {
  return (
    <div className="overlay" onClick={() => setIsOpen(false)}>
      <div className="centered">
        <div className="modal-container">
          <div className="modal-header">
            {/* <div className="modal-text-title">Modal Title</div> */}
            <div className="modal-text-title">
              <div className="title">{Title}</div>
            </div>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <RiCloseLine />
            </button>
          </div>
          <div className="modal-body">{Body}</div>
        </div>
      </div>
    </div>
  );
};
export default InfoModal;

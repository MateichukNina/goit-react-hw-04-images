
import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({image, onClose}) => {

  
  useEffect(() => {
    const handleKeyDown = event =>{if (event.code === 'Escape') {
      onClose();} 
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
;

const handleBackdropClick = event => {
  if (event.target === event.currentTarget) {
    onClose();
  }
};
  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={image} alt="" />
      </div>
    </div>,
    modalRoot,
  );
}
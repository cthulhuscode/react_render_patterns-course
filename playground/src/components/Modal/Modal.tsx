import { Dispatch, ReactNode, SetStateAction, useContext } from "react";
import { MdCancel } from "react-icons/md";
import ReactDOM from "react-dom";
import "./style.css";

interface ModalProps {
  children: ReactNode;
  closeModal: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ children, closeModal }: ModalProps) => {
  const onClose = () => {
    /* Así se puede acceder al estado previo del state */
    closeModal((prevState) => !prevState);
  };
  /* Se le puede pasar cualquier cosa,
  incluso un componente de los ya hechos.

  Se puede reutilizar el componente para así
  enviar lo que se necesite. 
  */

  return ReactDOM.createPortal(
    <div className="modal">
      <MdCancel className="cancel-icon" onClick={onClose} />
      {children}
    </div>,
    document.getElementById("modal")!
  );
};

import { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { Overlay, ModalStyle } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({onCloseModal, children}) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    });
    
    const handleKeyDown = (e) => {
        if(e.code === 'Escape'){
            onCloseModal();
        }
    };

    const handleBackdropClick = (e) => {
        if(e.currentTarget === e.target) {
            onCloseModal();
        }
    };

    return createPortal(
            <Overlay onClick={handleBackdropClick}>
                <ModalStyle>
                    {children}
                </ModalStyle>
            </Overlay>,
            modalRoot,
        )
};

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
};
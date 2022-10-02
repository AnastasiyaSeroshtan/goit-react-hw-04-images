import React from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalStyle } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    };
    
    handleKeyDown = (e) => {
        if(e.code === 'Escape'){
            this.props.onCloseModal();
        }
    };

    handleBackdropClick = (e) => {
        if(e.currentTarget === e.target) {
            this.props.onCloseModal();
        }
    };

    render() {
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalStyle>
                    {this.props.children}
                </ModalStyle>
            </Overlay>,
            modalRoot,
        )
    }
};
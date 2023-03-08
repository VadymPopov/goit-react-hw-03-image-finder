import React, {Component} from "react";
import { createPortal } from 'react-dom';
import { Overlay,Modal } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

class ModalLightbox extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    
    handleKeyDown = event => {
        if (event.code === 'Escape') {
          this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        console.log(event.currentTarget);
        console.log(event.target)
        if (event.currentTarget === event.target) {
          this.props.onClose();
        }
      };


    render(){
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <Modal>
                {this.props.children}
                    {/* <img src={this.props.largeImg} alt={this.props.alt} width="1200px"/> */}
                </Modal>
            </Overlay>,
            modalRoot
        );
    }
};

export default ModalLightbox;
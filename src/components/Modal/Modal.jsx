import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import ModalCloseButton from './ModalCloseButton';
import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
      console.log('Нажали ESC');
    }
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
      console.log('Нажали в Backdrop');
    }
  };

  render() {
    return createPortal(
      <div className={styles.modalBackdrop} onClick={this.handleBackdropClick}>
        <div className={styles.modalContent}>
          <ModalCloseButton onClose={this.props.onClose} />
          {this.props.children}
        </div>
      </div>,
      modalRoot,
    );
  }
}

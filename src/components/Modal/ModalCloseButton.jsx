import styles from './Modal.module.css';

const ModalCloseButton = ({ onClose }) => {
  return (
    <button className={styles.closeButton} type="button" onClick={onClose}>
      X
    </button>
  );
};

export default ModalCloseButton;

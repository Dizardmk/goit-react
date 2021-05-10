import styles from './Modal.module.scss';

const ModalCloseButton = ({ onClose }) => {
  return (
    <button className={styles.closeButton} type="button" onClick={onClose}>
      X
    </button>
  );
};

export default ModalCloseButton;

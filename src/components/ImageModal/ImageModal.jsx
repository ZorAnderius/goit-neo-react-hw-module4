import toCapital from '../../helpers/toCapital';
import styles from './ImageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({
  modalData: {
    alt_description,
    likes,
    big_image,
    username,
    profile_img,
    portfolio_link,
  },
  setIsOpenModal,
}) => {
  const handleToggle = () => {
    setIsOpenModal(prev => !prev);
  };

  return (
    <Modal
      isOpen={true}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      onRequestClose={handleToggle}
      overlayClassName={styles.backdrop}
      className={styles.modal}
    >
      <div className={styles.authorContainer}>
        <div className={styles.author}>
          <div className={styles.userPortfolioThumb}>
            <img src={profile_img} alt={username} />
          </div>
          <a href={portfolio_link} rel="noopener noreferrer" target="_blank">
            {username}
          </a>
        </div>
        <p className={styles.text}>Likes: {likes}</p>
      </div>
      <img className={styles.modalImg} src={big_image} />
      <div className={styles.infoContainer}>
        <p className={styles.description}>{toCapital(alt_description)}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;

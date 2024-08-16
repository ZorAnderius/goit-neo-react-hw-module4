import styles from './ImageCard.module.css';

const ImageCard = ({ image, handleModal }) => {
  const handleClick = image => {
    handleModal(image);
  };

  return (
    <div className={styles.imageCard} onClick={() => handleClick(image)}>
      <img
        className={styles.smallImg}
        src={image.small_img}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;

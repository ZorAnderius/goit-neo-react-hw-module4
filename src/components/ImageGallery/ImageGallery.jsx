import ImageCard from '../ImageCard/ImageCard';
import NotFound from '../NotFound/NotFound';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, query, isLoad, handleModal }) => {
  return (
      images?.length > 0
      ?(
      <ul className={styles.gallery}>
        {images.map(({ id, ...image }) => (
          <li key={id} className={styles.galleryImage}>
            <ImageCard image={image} handleModal={handleModal} />
          </li>
        ))}
      </ul>
          ) :
          !isLoad && <NotFound query={query} />
  );
};

export default ImageGallery;

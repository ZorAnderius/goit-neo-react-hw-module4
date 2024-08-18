import styles from './NotFound.module.css';

const NotFound = ({ query }) => {
  return (
    <div className={styles.notFoundContainer}>
      <p>
        Photos with<span> "{query}" </span>have been not found.
      </p>
    </div>
  );
};

export default NotFound;

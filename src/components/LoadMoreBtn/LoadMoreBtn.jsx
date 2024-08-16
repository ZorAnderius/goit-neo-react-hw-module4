import { forwardRef } from 'react';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = forwardRef(({ handlePage }, ref) => {
  return (
    <button ref={ref} className={styles.loadBtn} onClick={handlePage}>
      Load more
    </button>
  );
});

export default LoadMoreBtn;

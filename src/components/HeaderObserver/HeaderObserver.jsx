import { forwardRef, useEffect, useMemo } from 'react';
import styles from './HeaderObserver.module.css';

const HeaderObserver = forwardRef(({ setVisible }, ref) => {
  const callbackFunction = entries => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 1,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = ref.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [ref, options]);

  return <div ref={ref} className={styles.observeContainer}></div>;
});

export default HeaderObserver;

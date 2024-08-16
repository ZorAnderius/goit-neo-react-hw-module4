import styles from './Section.module.css';

const Section = ({ children }) => {
  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default Section;

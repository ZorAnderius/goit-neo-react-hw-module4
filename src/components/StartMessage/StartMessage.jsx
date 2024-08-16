import styles from './StartMessage.module.css';

const StartPoint = () => {
  return (
    <div className={styles.beginInfoContainer}>
      <p>
        This app helps you find a lot of photos based on a specific title. You
        can also:
      </p>
      <ol className={styles.infoList}>
        <li key="1">
          - search for photos (just type a title, like 'cat' and
          you will get many quality photos of cats).
        </li>
        <li key="2">
          - load more photos with a convenient scroll to the beginning of the
          new set.
        </li>
        <li key="3">
          - view the original photo in a separate window (when you click on the
          photo).
        </li>
        <li key="4">
          - see additional information about the photo, including the number of likes and the
          author.
        </li>
        <li key="5">
          - if you click on the author's name, you will be redirected to a new
          tab with the author's profile.
        </li>
      </ol>
      <p>
        Thank you for using my application. Take care, have a nice day, and see
        you around!
      </p>
    </div>
  );
};

export default StartPoint;

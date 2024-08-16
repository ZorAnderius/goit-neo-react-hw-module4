import clsx from 'clsx';
import SearchBar from '../SearchBar/SearchBar';
import HeaderObserver from '../HeaderObserver/HeaderObserver';
import styles from './Header.module.css';
import { useRef, useState } from 'react';

const Header = ({ handleQuery, notify }) => {
  const [isVisible, setIsVisible] = useState(false);
  const observeRef = useRef(null);
  return (
    <>
      <HeaderObserver ref={observeRef} setVisible={setIsVisible} />
      <header className={clsx(styles.header, !isVisible && styles.fixed)}>
        <SearchBar handleQuery={handleQuery} notify={notify} />
      </header>
    </>
  );
};

export default Header;

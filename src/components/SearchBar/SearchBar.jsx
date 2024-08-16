import isValidValue from '../../helpers/validationSearch';
import styles from './SearchBar.module.css';
import { IoSearch } from 'react-icons/io5';

const SearchBar = ({ handleQuery, notify }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.searchQuery.value.trim().toLowerCase();
    if (!isValidValue(value))
      return notify('Search value is empty or less then 3 characters', 'error');
    handleQuery(value);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        name="searchQuery"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <button className={styles.btn} type="submit">
        <IoSearch className={styles.iconSearch} />
      </button>
    </form>
  );
};

export default SearchBar;

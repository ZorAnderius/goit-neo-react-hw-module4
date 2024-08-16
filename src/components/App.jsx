import { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { LuArrowBigUp } from 'react-icons/lu';
import ScrollToTop from 'react-scroll-to-top';

import fetchPhotos from '../api/fetchPhotos';
import option_toast from '../helpers/option_toast';
import isEqual from '../helpers/isEqual';
import Header from './Header/Header';
import ImageGallery from './ImageGallery/ImageGallery';
import Section from './Section/Section';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageModal from './ImageModal/ImageModal';
import StartMessage from './StartMessage/StartMessage';

import styles from './App.module.css';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const loadBtnRef = useRef();

  const scrollToLoad = oldY => {
    setTimeout(() => {
      window.scrollTo({
        top: oldY,
        behavior: 'smooth',
      });
    }, 0);
  };

  const notify = (message, type) => {
    return toast[type](message, { ...option_toast, className: styles[type] });
  };

  const checkPage = totalPage => {
    const isLastPage = totalPage <= page;
    setIsLastPage(isLastPage);
  };

  const handleQuery = querySearch => {
    if (!isEqual(querySearch, query)) {
      setData([]);
      setPage(1);
      setQuery(querySearch);
    }
  };

  const handlePage = () => {
    setPage(page + 1);
  };

  const handleModal = (image = {}) => {
    setModalData(image);
    setIsOpenModal(prevState => !prevState);
  };

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setIsError(false);
        setIsLoad(true);

        const scrollPosition =
          document.documentElement.scrollTop +
          loadBtnRef.current?.getBoundingClientRect().top -
          120;

        const data = await fetchPhotos({ query, page, per_page: 20 });
        checkPage(data.total_pages);
        setData(prevData => [...prevData, ...data.images]);
        scrollToLoad(scrollPosition);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoad(false);
      }
    };

    fetchData();
  }, [query, page]);

  useEffect(() => {
    document.body.style.overflow = isOpenModal ? 'hidden' : 'unset';
  }, [isOpenModal]);

  return (
    <>
      <Header handleQuery={handleQuery} notify={notify} />
      {data?.length == 0 && isLoad
        && <Loader size={100} isFirst />}
      
      <Section>
        {data?.length === 0 && !query
          ? <StartMessage />
          :<ImageGallery images={data} query={query} isLoad={isLoad} handleModal={handleModal} />
        }
        
        {data?.length > 0 &&
          !isLastPage &&
          (isLoad ? (
            <Loader size={40} />
          ) : (
            <LoadMoreBtn handlePage={handlePage} ref={loadBtnRef} />
          ))}
      </Section>

      {isError && <ErrorMessage />}
      {isOpenModal && (
        <ImageModal modalData={modalData} setIsOpenModal={setIsOpenModal} />
      )}
      <ScrollToTop
        className={styles.scrollToTop}
        smooth
        component={<LuArrowBigUp size={30} />}
      />
      <Toaster />
    </>
  );
}

export default App;

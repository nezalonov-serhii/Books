import { useEffect, useState } from 'react';

import { Main } from 'components/Main/Main';
import { Sidbar } from 'components/Sidbar/Sidbar';
import { getBooks } from 'services/getBooks';
import { useDispatch } from 'react-redux';
import { booksSlice } from 'redux/books/booksReducer';

const HomePage = () => {
    const dispatch = useDispatch();
//   const [books, setBooks] = useState('');
  
  useEffect(() => {
    getBooks().then(booksCollection => dispatch(booksSlice.actions.getPopularBooks(booksCollection.books)));
  }, []);

  return (
    <>
      <Sidbar />
      <Main />
    </>
  );
};

export default HomePage;

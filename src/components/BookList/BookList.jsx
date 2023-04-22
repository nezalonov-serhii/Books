// import { useEffect } from 'react';
// import { getBooks } from 'services/getBooks';

import { useSelector } from 'react-redux';
import { BooksListStyled, ListItemStyled } from './list.styled';

export const BookList = () => {
    const bookList = useSelector(state => state.books)
  console.log('bookList', bookList);
  return (
    <BooksListStyled>
      {bookList.length > 0 &&
        bookList.map(el => (
          <ListItemStyled key={el._id}>
            <img src={el.small_image} alt={el.title} />

                <p>{el.title}</p>
                <p>{el.author}</p>
                {el.inStock ? "Available" : "Not available"}
                <p>{el.price } UAH</p>
          </ListItemStyled>
        ))}
    </BooksListStyled>
  );
};

import { BookList } from 'components/BookList/BookList';
import { MainStyled } from './Main.styled';

export const Main = ({books}) => {


  return <MainStyled>
    <h2>Our new Books!</h2>

    <BookList booksCollection={ books} />
  </MainStyled>;
};

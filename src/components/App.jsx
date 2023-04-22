import { HomePage } from 'page/Home';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
// import { Main } from './Main/Main';
import { MainContainer, MainWrap } from './Main/Main.styled';
import { Provider } from 'react-redux';
import { store } from 'redux/books/store';
// import { Sidbar } from './Sidbar/Sidbar';

export const App = () => {
  return (
    <Provider store={store}>
      <MainContainer>
        <Header />
        <MainWrap>
          <HomePage />
        </MainWrap>
        <Footer />
      </MainContainer>
    </Provider>
  );
};

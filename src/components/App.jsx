import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { MainContainer, MainWrap } from './Main/Main.styled';
import { Sidbar } from './Sidbar/Sidbar';

export const App = () => {
  return (
    <MainContainer>
      <Header />
      <MainWrap>
        <Sidbar />
        <Main></Main>
      </MainWrap>
      <Footer />
    </MainContainer>
  );
};

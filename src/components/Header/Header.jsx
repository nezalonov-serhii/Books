import { HeaderStyle } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyle>
      <a href="./">Logo</a>
      <form>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>

      <a href="./">Корзина</a>
    </HeaderStyle>
  );
};

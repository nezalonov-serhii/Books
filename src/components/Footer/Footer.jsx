import { FooterStyle } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyle>
      <a href="./">Logo</a>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contacts</a>
          </li>
        </ul>
      </nav>
    </FooterStyle>
  );
};

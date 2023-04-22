const { default: styled } = require("styled-components");


export const BooksListStyled = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 40px;
list-style: none;
margin: 0;
padding: 0;
width: 100%;
`

export const ListItemStyled = styled.li`
display: block;
padding: 15px;
/* width: 250px; */
/* width: calc((100% - 30px)/3); */
/* height: 150px; */
border: 1px solid tomato;

`

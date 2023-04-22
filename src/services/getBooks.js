export const getBooks = () => {
  const books = fetch('https://books-be.herokuapp.com/api/books').then(data =>
    data.json()
  );

  return books;
};


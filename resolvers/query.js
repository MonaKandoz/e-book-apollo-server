exports.Query = {
  books: (parent, args, { books }) => books,
  book: (parent, { isbn13 }, { books }) =>
    books.find((book) => book.isbn13 === isbn13),
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) =>
    categories.find((category) => category.id === id),
};

exports.Category= {
    books: ({ id }, args, {books}) =>
      books.filter((book) => book.categoryId === id),
  };
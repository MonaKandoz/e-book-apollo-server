const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    books: [Book!]!
    book(isbn13: ID!): Book
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Book {
    title: String!
    subtitle: String!
    isbn13: ID!
    price: String!
    image: String!
    url: String!
    categoryId: String!
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    books: [Book!]!
  }
`;

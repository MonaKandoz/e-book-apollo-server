const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query, Category, Book } = require("./resolvers");
const { books, categories } = require("./data");
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Book
    },
    context:{
        books,
        categories
    }
});

server.listen().then(({ url })=>{
    console.log(`🚀 Server ready at ${url}`);
})
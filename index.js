//entry point for our API

//import the apollo server inside class ApolloServer
//ApolloServer is a class that contains all the logic to run a GraphQL API
//it contins information related to configuring our API 
//to work with apollo to work with graphQL
const { ApolloServer } = require('apollo-server');

//1st parameter for apolloServer is the typedefs
const {typeDefs} = require('./schema/type-defs');

//2nd parameter for apolloServer is the resolvers
const {resolvers} = require('./schema/resolvers');

//ApolloServer accepts two parameters: typedefs and resolvers
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Server is running on ${url}`);
});

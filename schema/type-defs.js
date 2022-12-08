
// Every piece of data, every custom type that you will define,
// every query in GQL will exist in inside typedefs variable which will be exported
// from this file

const {gql} = require("apollo-server"); //import from apollo-server library into gql

//gql will allow us to write pure GQL code and then translate it into JS code
//so that JS will be able to understand it

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: String!
    }


    #Since we have only one field 'Query', we only have one resolver function
    type Query {

        # this should return a list of users
        # we need resolvers to resolve this field
        users: [User!]!
    }

`;

module.exports = {typeDefs};
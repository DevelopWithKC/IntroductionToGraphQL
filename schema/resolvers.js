// All the ypes in that we defined in type-def.js will de stuff like 
// make calls to APIs, make calls to databases, etc.
// So, All those functions that does these things will be defined in this file


// =============================================================================

//we are creating an object called resolvers which will be passed 
//as a second parameter to ApolloServer
//This object will contain all the resolver functions that will exist inside our API
// i.e all the functions that will make calls to databases, decide what will be returned
// to the front end, etc


//import the list of users from the fake data i.e UserList which was exported
const {UserList} = require('../FakeData');


const resolvers = {
    //highest level resolver function
    
    Query: {
        //we define all of the resolver functions that will exist as a subfield
        // for the Query type

        users(){
            //here, we write all the javascript code necessary to tell graphql
            //what we want to return whenever someone makes a query to the users field

            //If you have a database, it is over here that you make an API call 
            //to the database to get the data about users and then return it.


            //return the list of users
            return UserList;
        }

    }
};

module.exports = {resolvers};
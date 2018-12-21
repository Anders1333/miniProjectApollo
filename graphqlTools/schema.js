
var {resolvers} = require("./resolvers")
var gql = require("graphql-tag");
//  var {buildSchema} = require('graphql');
var {makeExecutableSchema} = require('graphql-tools');

// use gql ? use makeexecutableschema ? what the fuck ? 

var typeDefs = `


type User{
    id : ID
    userName: String!
    firstName : String
    lastName : String
    password : String!
    email: String
    created: DateTime
    lastUpdated : DateTime
}

type Position{
   user: User!
   created: DateTime
   loc: Coordinates
}

type Coordinates{
    longitude: int
    latitude: int
}

type UpdateLocationInput{
    user: User
    lon: int
    lat: int
}


type Query {
    getAllUsers(): [User]
}

type Query {
    getUserFromId(id: ID): User
}

type Query {
    getUserFromUsername(userName: String): User
}

type Mutation{
    addUser(input: User): User
}

type Mutation{
    addLocation(input: Location): Location
}

type Mutation{
    updateLocation(input: updateLocationInput): Location
}


`;
const schema = makeExecutableSchema({ typeDefs, resolvers});


module.exports= {
    schema: {schema}
}


  
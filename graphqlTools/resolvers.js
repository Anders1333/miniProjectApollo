var userFacade = require("../facades/userFacade");
var positionFacade = require("../facades/positionFacade");
var loginFacade = require("../facades/loginFacade");
var blogFacade = require("../facades/blogFacade");
var DateTime = require("@okgrow/graphql-scalars");



const resolvers = { 
    Query:{

// -----  User queries -------- //
       getAllUsers: () => {
           userFacade.getAllUsers()
       },
       getUserFromId: ({input}) => {
           userFacade.findById(input.id)      
       },
       getUserFromUsername: ({input}) => {
           userFacade.findByUsername(input.userName)
       },

// ------ Position quieries -------- //
       getAllPositions: () => {
           positionFacade.getAllPositions()
       },

    },

//---------------------------------------------- Mutations --------------------------------------//

    Mutation:{
// ------ User Mutations ------ //
        addUser: ({input}) => {
             userFacade.addUser(
                 input.firstName,
                 input.userName,
                 input.password, 
                 input.email)
            },
// ------ Position Mutations ------- //

        addPosition: ({input}) => {
            positionFacade.createNewPosition(
                input.userid, 
                input.longitude, 
                input.latitude)
        },

        updatePosition: ({input}) => {
            positionFacade.updatePosition(
                input.user,
                input.lon,
                input.lat)
        },

// ------- Login -----------//
        login: ({input}) => {
            loginFacade.login(
                input.username,
                input.password,
                input.lat,
                input.lon,
                input.dist);
        }
     },
};

module.exports= {

resolvers: {resolvers}

}

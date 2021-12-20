const { User } = require('../models/User.js');

const userController = {
    // Get all Users
    getAllUsers(req, res) {
        User.find({})
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // Get 1 user by id
    getUser({ params }, res) {

    },

    // Create a new user
    createUser({ body }, res) {

    },
    
    // Update a user
    updateUser({ params, body }, res) {

    },
    
    // Delete a user
    removeUser({ params }, res) {

    }
}

module.exports = userController;
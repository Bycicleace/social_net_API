const { User, Thought } = require('../models/index.js');

const userController = {
    // Get all Users
    getAllUsers(req, res) {
        User.find({})
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // Get 1 user by id
    getUser({ params }, res) {
        User.findOne({ _id: params.id })
            .select('-__v')
            .then(dbUserData => {
                if(!dbUserData) {
                    res.status(404).json({ message: "User not found!" });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // Create a new user
    createUser({ body }, res) {
        User.create(body) 
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },
    
    // Update a user
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbUserData => {
                if(!dbUserData) {
                    res.status(404).json({ message: "User not found!" });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    
    // Delete a user
    removeUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: "User not found!" });
                    return;
                }
                res.json(dbUserData);
                Thought.find()
                    .where('userId').equals(params.id)
                    .then(dbThoughtsData => {
                        console.log(dbThoughtsData);
                        if (dbThoughtsData.length >= 1) {
                            dbThoughtsData.forEach(element => {
                                Thought.findOneAndDelete({ _id: element._id })
                                    .then(deletedThought => {
                                        console.log(`Deleted Thought:\n${deletedThought}\n`);
                                    })
                            });
                        } else {
                            console.log('No corresponding thoughts found')
                        }
                    })
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // Add a friend
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $push: { friends: params.friendId } },
            { new: true } 
        )
            .then(dbUserData => {
                if(!dbUserData) {
                    res.status(404).json({message: "User not found!" });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // Remove a friend
    removeFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: "User not found!" });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
};

module.exports = userController;
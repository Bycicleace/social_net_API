const { Thought, User } = require('../models/index.js');

const thoughtController = {
    // GET all all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .select('-__v')
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // GET single thought by id
    getOneThought({ params }, res) {
        Thought.findOne({ _id: params.id })
            .select('-__v')
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "Thought not found" });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // POST new thought
    createThought({ body }, res) {
        Thought.create(body)
            .then(({ _id, userId }) => {
                return User.findOneAndUpdate(
                    { _id: userId },
                    { $push: { thoughts: String(_id) } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: "User not found" });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // PUT and update a current thought by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "Thought not found" });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err =>{
                console.log(err);
                res.status(400).json(err);
            })
    },

    // DELETE a thought by id
    removeThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(deletedThought => {
                console.log(`Deleted Thought:\n${deletedThought}`);
                if (!deletedThought) {
                    return res.status(404).json({ message: "Thought not found" });
                }
                // console.log(User.findOne({ _id: deletedThought.userId }).thoughts);
                User.findOne({ _id: deletedThought.userId })
                    .then(result => console.log(result, result.thoughts));
                return User.findOneAndUpdate(
                    { _id: deletedThought.userId },
                    { $pull: { thoughts: params.id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: "User not found" });
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

module.exports = thoughtController;
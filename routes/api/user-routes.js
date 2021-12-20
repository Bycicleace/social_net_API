const router = require('express').Router();
const { getAllUsers, getUser, newUser, updateUser, removeUser } = require('../../controllers/user-controller.js');

router
    .route('/')
    .get(getAllUsers)      // All Users
    .post(newUser)     // New User

router
    .route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(removeUser)

module.exports = router;
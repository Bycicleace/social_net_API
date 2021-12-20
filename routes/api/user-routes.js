const router = require('express').Router();
const { getAllUsers, getUser, createUser, updateUser, removeUser } = require('../../controllers/user-controller.js');

router
    .route('/')
    .get(getAllUsers)       // All Users
    .post(createUser)          // New User

router
    .route('/:id')
    .get(getUser)           // Single User
    .put(updateUser)        // Update User
    .delete(removeUser)     // Delete User

module.exports = router;
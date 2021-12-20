const router = require('express').Router();
const { getAllUsers, 
        getUser, 
        createUser, 
        updateUser, 
        removeUser, 
        addFriend, 
        removeFriend } = require('../../controllers/user-controller.js');

router
    .route('/')
    .get(getAllUsers)       // All Users
    .post(createUser)          // New User

router
    .route('/:id')
    .get(getUser)           // Single User
    .put(updateUser)        // Update User
    .delete(removeUser)     // Delete User

// Friends
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;
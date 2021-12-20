const router = require('express').Router();

router
    .route('/users')
    .get()      // All Users
    .get()      // Single User
    .post()     // New User
    .put()      // Update User
    .delete()   // Delete User

module.exports = router;
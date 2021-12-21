const router = require('express').Router();
const { getAllThoughts,
        getOneThought,
        createThought,
        updateThought,
        removeThought } = require('../../controllers/thought-controller.js');

router
    .route('/')
    .get(getAllThoughts)        // Get all thoughts
    .post(createThought)        // Create new thought

router
    .route('/:id')
    .get(getOneThought)         // Get one thought
    .put(updateThought)         // Update one thought
    .delete(removeThought)      // Remove one thought

module.exports = router;
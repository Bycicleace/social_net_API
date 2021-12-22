const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            // getter method here
        },
        username: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        reactions: [] // Will be collection of reaction documents
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
const { Schema, model } = require('mongoose');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function(v) {
                    return '/^[\w\.-]+@[\w\.-]+\.[\w]{2,}$/'.test(v);
                },
                message: props => `${props.value} is an invalid Email Address!`
            }
        },
        thoughts: [],
        friends: [],
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)
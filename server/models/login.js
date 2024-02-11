const mongoose = require('mongoose');

const loginSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: [true, "Please enter a User Name"]
        },
        password: {
            type: String,
            required: [true, "Please enter a Password"]
        },
        checkoutVisited: {
            type: Boolean,
            default: false
        },
        coursePurchased: {
            type: Boolean,
            default: false
        },
        lastLoginTimestamp: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
);

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;
const express = require('express');
const router = express.Router();
const Signup = require('../models/signup');
const Login = require('../models/login');

router.post('/signup', async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmPassword;

        if (password === cpassword) {
            const userSignupData = new Signup({
                fullName: req.body.fullName,
                userName: req.body.userName,
                email: req.body.email,
                phone: req.body.phone,
                password: password,
                confirmPassword: cpassword,
                gender: req.body.gender,
            });

            const signedup = await userSignupData.save();

            const loginData = new Login({
                userName: req.body.userName,
                password: password, 
                lastLoginTimestamp: new Date() 
            });

            await loginData.save();

            return res.status(200).json({ message: 'User registered successfully' });
        } else {
            return res.status(500).json({ message: 'Password are not matching' });
        }
    } catch (error) {
        console.error('Error occurred during signup:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;

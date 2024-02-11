const express = require('express');
const router = express.Router();
const Login = require('../models/login');

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;

    try {
        const user = await Login.findOne({ userName });
        console.log(user)
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = (password === user.password) ? 1 : 0;

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check if last login timestamp is available
        if (user.lastLoginTimestamp) {
            // Calculate the difference in days between last login and current time
            const lastLoginDate = new Date(user.lastLoginTimestamp);
            const currentDate = new Date();
            const differenceInDays = Math.floor((currentDate - lastLoginDate) / (1000 * 60 * 60 * 24));

            if (differenceInDays > 5) {
                // If user was inactive for more than 5 days, update last login timestamp and send alert
                await Login.findByIdAndUpdate(user._id, { lastLoginTimestamp: currentDate });
                return res.status(200).json({ message: 'User inactive for more than 5 days' });
            }
        }

        // Update last login timestamp in the database
        await Login.findByIdAndUpdate(user._id, { lastLoginTimestamp: new Date() });
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;

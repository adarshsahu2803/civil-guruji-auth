const express = require('express');
const router = express.Router();
const Login = require('../models/login');
const Signup = require('../models/signup');
const nodemailer = require('nodemailer');

// Create a nodemailer transporter using SMTP credentials
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'fiona.gottlieb65@ethereal.email',
        pass: '75zvwbHJR4yx9pqHNf'
    }
});

const sendEmail = async (toEmail, subject, text, html) => {
    try {
        await transporter.sendMail({
            from: 'adarshsahu1077@gmail.com',
            to: toEmail,
            subject: subject,
            text: text,
            html: html
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;

    try {
        const user = await Login.findOne({ userName });
        const userDetailedInfo = await Signup.findOne({ userName });
        // console.log(user)
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = (password === user.password) ? 1 : 0;

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        if (user.lastLoginTimestamp) {
            const lastLoginDate = new Date(user.lastLoginTimestamp);
            const currentDate = new Date();
            // const differenceInDays = Math.floor((currentDate - lastLoginDate) / (1000 * 60 * 60 * 24));
            const differenceInDays = 6;

            if (differenceInDays > 5) {
                await Login.findByIdAndUpdate(user._id, { lastLoginTimestamp: currentDate });
                sendEmail(userDetailedInfo.email, 'Inactive Account Alert', 'Your account has been inactive for more than 5 days. Please log in to avoid deactivation.');
                return res.status(200).json({ message: 'User inactive for more than 5 days' });
            }
        }

        await Login.findByIdAndUpdate(user._id, { lastLoginTimestamp: new Date() });
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;

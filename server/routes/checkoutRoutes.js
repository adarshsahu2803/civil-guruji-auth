const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Signup = require('../models/signup');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, 
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
        // console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

router.post('/checkout', async (req, res) => {
    const { userName, password } = req.body;

    try {
        const user = await Signup.findOne({ userName });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        sendEmail(user.email, 'Checkout Pending', 'Yor are one step away from your purchase!', '<p>Finish your checkout to get 50% off on your course.</p>');

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;

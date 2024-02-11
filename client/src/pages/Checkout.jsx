import Home from './Home';
import '../css/Checkout.css';
import React, { useState, useContext } from 'react';
import { UserContext } from "../contexts/UserContext";

function Checkout() {
    const [checkedOut, setCheckedOut] = useState(false);
    const userObj = useContext(UserContext);

    const handlePurchase = () => {
        setCheckedOut(true);
    };

    const handleTerminate = async () => {
        setCheckedOut(true);
        alert('User did not proceed to purchase a course');

        try {
            const response = await fetch(`https://civil-guruji-auth.onrender.com/checkout`, {
            // const response = await fetch('http://localhost:5000/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userObj),
            });
            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    if (checkedOut) {
        return (
            <Home />
        );
    }

    return (
        <div className="checkout-container">
            <h1>Checkout Page</h1>
            <div className="checkout-details">
                <p><strong>Course Name:</strong> Enhance Floor Plan</p>
                <p><strong>Price:</strong> Free</p>
            </div>
            <div className="checkout-buttons">
                <button onClick={handlePurchase}>Purchase</button>
                <button onClick={handleTerminate}>Terminate</button>
            </div>
        </div>
    );
}

export default Checkout;

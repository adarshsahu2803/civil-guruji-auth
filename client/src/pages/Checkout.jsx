import Home from './Home';
import { useState } from 'react';
import '../css/Checkout.css';

function Checkout() {
    const [checkedOut, setCheckedOut] = useState(false);

    const handlePurchase = () => {
        // Handle purchase logic here
        // Redirect to Home after purchase
        setCheckedOut(true);
    };

    const handleTerminate = () => {
        // Handle termination logic here
        // Redirect to Home after termination
        setCheckedOut(true);
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

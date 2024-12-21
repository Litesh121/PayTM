import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const history = useHistory();

    const handleNavigation = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === 'login') {
            history.push('/login');
        } else if (selectedOption === 'add-bank-account') {
            history.push('/add-bank-account');
        }
    };

    return (
        <div className="home">
            <h1>Welcome to Paytm Clone</h1>
            <p>Your one-stop solution for all transactions.</p>
            <div className="navigation-dropdown">
                <select onChange={handleNavigation}>
                    <option value="">Select an option</option>
                    <option value="login">Login</option>
                    <option value="add-bank-account">Add Bank Account</option>
                </select>
            </div>
        </div>
    );
};

export default Home;
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/login', { phoneNumber, name });
            setMessage('Login successful!');
            setTimeout(() => {
                history.push('/transaction');
            }, 2000); // Redirect to transaction page after 2 seconds
        } catch (error) {
            setMessage('Error logging in');
        }
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button className="button" onClick={handleLogin}>Login</button>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default Login;
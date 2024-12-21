import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './AddBankAccount.css';

const AddBankAccount = () => {
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountHolderName, setAccountHolderName] = useState('');
    const [address, setAddress] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const handleAddBankAccount = async () => {
        try {
            const response = await axios.post('/api/bank-account', {
                bankName,
                accountNumber,
                accountHolderName,
                address,
                ifscCode
            });
            setMessage('Bank account added successfully!');
            setTimeout(() => {
                history.push('/');
            }, 2000); // Redirect to home page after 2 seconds
        } catch (error) {
            setMessage('Error adding bank account');
        }
    };

    return (
        <div className="add-bank-account">
            <h1>Add Bank Account</h1>
            <input
                type="text"
                placeholder="Bank Name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
            />
            <input
                type="text"
                placeholder="Account Holder Name"
                value={accountHolderName}
                onChange={(e) => setAccountHolderName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <input
                type="text"
                placeholder="IFSC Code"
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
            />
            <button className="button" onClick={handleAddBankAccount}>Add Bank Account</button>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default AddBankAccount;
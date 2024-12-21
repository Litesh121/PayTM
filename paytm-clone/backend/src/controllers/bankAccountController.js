const BankAccount = require('../models/BankAccount');

exports.addBankAccount = async (req, res) => {
    const { bankName, accountNumber, accountHolderName, address, ifscCode } = req.body;

    try {
        const bankAccount = new BankAccount({
            bankName,
            accountNumber,
            accountHolderName,
            address,
            ifscCode
        });
        await bankAccount.save();
        res.status(201).json({ message: 'Bank account added successfully!' });
    } catch (error) {
        console.error('Error adding bank account:', error);
        res.status(500).json({ message: 'Error adding bank account' });
    }
};
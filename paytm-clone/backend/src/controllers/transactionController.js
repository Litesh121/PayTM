const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res) => {
    const { userId, amount, transactionType } = req.body;

    try {
        const transaction = new Transaction({ userId, amount, transactionType });
        await transaction.save();
        res.status(201).json({ message: 'Transaction successful' });
    } catch (error) {
        res.status(500).json({ message: 'Transaction failed', error });
    }
};
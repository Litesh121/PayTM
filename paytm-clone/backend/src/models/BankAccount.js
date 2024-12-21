const mongoose = require('mongoose');

const bankAccountSchema = new mongoose.Schema({
    bankName: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    accountHolderName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    ifscCode: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('BankAccount', bankAccountSchema);
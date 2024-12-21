const User = require('../models/User');

exports.login = async (req, res) => {
    const { name, phoneNumber } = req.body;

    try {
        let user = await User.findOne({ phoneNumber });
        if (!user) {
            user = new User({ name, phoneNumber });
            await user.save();
        }
        res.status(200).json({ message: 'Login successful!', user });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
};
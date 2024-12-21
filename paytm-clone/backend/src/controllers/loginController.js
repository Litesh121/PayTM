const User = require('../models/User');

exports.login = async (req, res) => {
    const { phoneNumber, name } = req.body;

    try {
        let user = await User.findOne({ phoneNumber });
        if (!user) {
            user = new User({ phoneNumber, name });
            await user.save();
        }
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error });
    }
};
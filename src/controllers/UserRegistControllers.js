const User = require('../models/user');

module.exports = {
    async store(req, res) {
    const { email } = req.body;

        try{
            if ( await User.findOne({ email })){
                return res.status(400).send({ error: 'User already exist '});
            }

            const user = await User.create(req.body);

            console.log(user);

            user.password = undefined;

            return res.send({ user });
        } catch (err) {
            return res.status(400).send({ error: 'Registration Failed' })
        }
    }
}
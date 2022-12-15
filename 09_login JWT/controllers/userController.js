const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userController = {
    register: async function register(req, res) {

        const selectedUser = await User.findOne({ email: req.body.email })
        if (selectedUser) return res.status(400).send('Email already exists')

        const user = new User({
            name: req.body.name,
            email: req.body.emal,
            password: bcrypt.hashSync(req.body.password)
        })

        try {
            const savedUser = await user.save()
            res.send(savedUser)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    login: async function login(req, res) {
        const selectedUser = await User.findOne({ email: req.body.email })
        if (!selectedUser) return res.status(400).send('Email or password incorrect')

        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password)
        if (!passwordAndUserMatch) return res.status(400).send('Email or password incorrect')

        const token = jwt.sign({ _id: selectedUser._id }, process.env.TOKEN_SECRET)

        res.header('authoriztion-token', token)

        res.send("User Logged")
    }
}

module.exports = userController 
var express = require('express'),
    router = express.Router(),
    logger = require('../../config/logger');
mongoose = require('mongoose');
User = mongoose.model('User');
asyncHandler = require('express-async-handler');


module.exports = function (app, config) {
    app.use('/api', router);

    router.post('/users', asyncHandler(async (req, res) => {
        logger.log('info', 'Creating user');
        var user = new User(req.body);
        await user.save()
            .then(result => {
                res.status(201).json(result);
            })
    }));

    router.get('/users', asyncHandler(async (req, res) => {
        logger.log('info', 'Get all users');
        let query = User.find();
        query.sort(req.query.order)
        await query.exec().then(result => {
            res.status(200).json(result);
        })
    }));

    router.get('/users/:id', asyncHandler(async (req, res) => {
        logger.log('info', 'Get user %s', req.params._id);
        await User.findById(req.params._id).then(result => {
            res.status(200).json(result);
        })
    }));

    router.put('/users', asyncHandler(async (req, res) => {
        logger.log('info', 'Updating user');
        await User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true })
            .then(result => {
                res.status(200).json(result);
            })
    }));

    router.route('/users/password/:id').put(function (req, res, next) {
        logger.log('info', 'Update password for user %s', req.params._id);
        res.status(200).json({ message: "Update password for user " + req.params._id });
    });

    router.delete('/users/:id', asyncHandler(async (req, res) => {
        logger.log('info', 'Deleting user %s', req.params._id);
        await User.remove({ _id: req.params._id })
            .then(result => {
                res.status(200).json(result);
            })
    }));


    router.route('/login').post(function (req, res, next) {
        console.log(req.body);
        var email = req.body.email
        var password = req.body.password;

        var obj = { 'email': email, 'password': password };
        res.status(201).json(obj);

    });
};

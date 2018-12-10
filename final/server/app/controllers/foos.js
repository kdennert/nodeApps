var express = require('express'),
    router = express.Router(),
    logger = require('../../config/logger');
mongoose = require('mongoose');
Foo = mongoose.model('Foo');
asyncHandler = require('express-async-handler');
passportService = require('../../config/passport'),
    passport = require('passport');

var requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function (app, config) {
    app.use('/api', router);

    router.get('/foo', asyncHandler(async (req, res) => {
        logger.log('info', 'Get all Foos');
        let query = Foo.find();
        query.sort(req.query.order)
        .populate({ path: 'personId', model: 'User', select: 'lastName firstName fullName' })
        .populate({ path: 'ownerId', model: 'User', select: 'lastName firstName fullName' });
        if (req.query.status) {
            if (req.query.status[0] == '-') {
                query.where('status').ne(req.query.status.substring(1));
            } else {
                query.where('status').eq(req.query.status);
            }
        }
        await query.exec().then(result => {
            res.status(200).json(result);
        })
    }));

    router.get('/foo/:id', asyncHandler(async (req, res) => {
        logger.log('info', 'Get a foo %s', req.params.id);
        let query = HelpTicket.find();
        query.sort(req.query.order)
            .populate({ path: 'personId', model: 'User', select: 'lastName firstName fullName' })
            .populate({ path: 'ownerId', model: 'User', select: 'lastName firstName fullName' });
        await HelpTicket.findById(req.params.id).then(result => {
            res.status(200).json(result);
        })
    }))

    router.put('/foo', asyncHandler(async (req, res) => {
        logger.log('info', 'Updating Foo');
        await Foo.findOneAndUpdate({ _id: req.body._id }, req.body.foo, { new: true })
            .then(result => {
                res.status(200).json(result);
            })
    }));

    router.post('/foo', asyncHandler(async (req, res) => {
        logger.log('info', 'Creating Foo');
        var foo = new Foo(req.body.foo);
        await foo.save()
            .then(result => {
                res.status(201).json(result);
            })
    }));

    router.delete('/foo/:id', asyncHandler(async (req, res) => {
        logger.log('info', 'Deleting Foo %s', req.params.id);
        await Foo.remove({ _id: req.params._id })
            .then(result => {
                res.status(200).json(result);
            })
    }));
};

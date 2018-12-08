var express = require('express'),
    router = express.Router(),
    logger = require('../../config/logger');
mongoose = require('mongoose');
Foo = mongoose.model('Foo');
asyncHandler = require('express-async-handler');

module.exports = function (app, config) {
    app.use('/api', router);

    router.get('/foo', asyncHandler(async (req, res) => {
        logger.log('info', 'Get all Foos');
        let query = Foo.find();
        query.sort(req.query.order)
        await query.exec().then(result => {
            res.status(200).json(result);
        })
    }));

    router.get('/foo/:id', asyncHandler(async (req, res) => {
        logger.log('info', 'Get a foo %s', req.params.id);
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
        await Foo.remove({ _id: req.body._id })
            .then(result => {
                res.status(200).json(result);
            })
    }));
};

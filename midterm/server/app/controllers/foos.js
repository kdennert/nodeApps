var express = require('express'),
    router = express.Router(),
    logger = require('../../config/logger');
mongoose = require('mongoose');
Foo = mongoose.model('Foo');
asyncHandler = require('express-async-handler');


module.exports = function (app, config) {
    app.use('/api', router);

    router.post('/foos', asyncHandler(async (req, res) => {
        logger.log('info', 'Creating foo');
        var foo = new Foo(req.body);
        await foo.save()
            .then(result => {
                res.status(201).json(result);
            })
    }));

    router.get('/foos', asyncHandler(async (req, res) => {
        logger.log('info', 'Get all foos');
        let query = Foo.find();
        query.sort(req.query.order)
        await query.exec().then(result => {
            res.status(200).json(result);
        })
    }));

    router.get('/foos/:id', asyncHandler(async (req, res) => {
        logger.log('info', 'Get foo %s', req.params.id);
        await Foo.findById({ id: req.params.id }).then(result => {
            res.status(200).json(result);
        })
    }));

    router.put('/foos', asyncHandler(async (req, res) => {
        logger.log('info', 'Updating foo');
        await Foo.findOneAndUpdate({ id: req.body.id }, req.body, { new: true })
            .then(result => {
                res.status(200).json(result);
            })
    }));

    // router.route('/users/password/:id').put(function (req, res, next) {
    //     logger.log('info', 'Update password for user %s', req.params.id);
    //     res.status(200).json({ message: "Update password for user " + req.params.id });
    // });

    router.delete('/foos/:id', asyncHandler(async (req, res) => {
        logger.log('info', 'Deleting foo %s', req.params.id);
        await Foo.remove({ id: req.params.id })
            .then(result => {
                res.status(200).json(result);
            })
    }));

    router.route('/foos').post(function (req, res, next) {
        console.log(req.body);
        var foo = req.body.foo
        var woo = req.body.woo;

        var obj = { 'foo': foo, 'woo': woo };
        res.status(201).json(obj);

    });
};

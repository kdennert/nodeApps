var express = require('express'),
    router = express.Router(),
    logger = require('../../config/logger');
mongoose = require('mongoose');
Todo = mongoose.model('Todo');
asyncHandler = require('express-async-handler');


module.exports = function (app, config) {
    app.use('/api', router);

    router.post('/todos', asyncHandler(async (req, res) => {
        logger.log('info', 'Creating todo');
        var todo = new Todo(req.body);
        await todo.save()
            .then(result => {
                res.status(201).json(result);
            })
    }));

    router.get('/todos', asyncHandler(async (req, res) => {
        logger.log('info', 'Get all todos');
        let query = Todo.find();
        query.sort(req.query.order)
        await query.exec().then(result => {
            res.status(200).json(result);
        })
    }));

    router.get('/todos/:id', asyncHandler(async (req, res) => {
        logger.log('info', 'Get todo %s', req.params.id);
        await Todo.findById(req.params.id).then(result => {
            res.status(200).json(result);
        })
    }));

    router.put('/todos', asyncHandler(async (req, res) => {
        logger.log('info', 'Updating todo');
        await Todo.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true })
            .then(result => {
                res.status(200).json(result);
            })
    }));

    // router.route('/users/password/:id').put(function (req, res, next) {
    //     logger.log('info', 'Update password for user %s', req.params.id);
    //     res.status(200).json({ message: "Update password for user " + req.params.id });
    // });

    router.delete('/todos/:id', asyncHandler(async (req, res) => {
        logger.log('info', 'Deleting todo %s', req.params.id);
        await Todo.remove({ _id: req.params.id })
            .then(result => {
                res.status(200).json(result);
            })
    }));


    // router.route('/login').post(function (req, res, next) {
    //     console.log(req.body);
    //     var email = req.body.email
    //     var password = req.body.password;

    //     var obj = { 'email': email, 'password': password };
    //     res.status(201).json(obj);

    // });
};

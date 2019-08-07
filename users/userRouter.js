// const express = 'express';

const router = require('express').Router();

const data = require('./userDb.js');

router.post('/', (req, res) => {
    const userBody = req.body
    if (userBody.name) {
        data.insert(userBody)
            .then(resource => {
                res.status(201).json(userBody)
            })
            .catch(error => {
                res.status(500).json({ error: "error posting user" })
            })
    } else {
        res.status(400)({ error: " missing name field" })
    }
});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res, next) => {
    console.log('hello from userRouter');
    data.get()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(error => {
            res.status(500).json({ error: "server error getting" })
        })
    // next();
});

router.get('/:id', validateUserId, (req, res) => {
// router.get('/:id', (req, res) => {
    // const { id } = req.params;
    data.getById(req.user.id)
        .then(resource => {
            // console.log(req.user);
            res.status(200).json(resource)
        })
        .catch(error => {
            res.status(500).json({ error: "server error getting by ID" })
        })
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    // if (id) {

    // }
    data.remove(id)
        .then(resource => {
            // res.status(200).json({ message: "successfully deleted"})
            res.status(200).json(resource)
        })
        .catch(error => {
            res.status(500).json({ error: "server error deleting by ID" })
        })
});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    const { id } = req.params;
    console.log(req.user);
    req.user = { id: id }
    console.log(req.user);
    data.getById(id)
        .then(
            next()
        )
        .catch(error => {
            res.status(400).json({ message: "invalid user id" })
        })
};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;

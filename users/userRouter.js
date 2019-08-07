// const express = 'express';

const router = require('express').Router();

const data = require('./userDb.js');

router.post('/', validateUser, (req, res) => {
    const userBody = req.body
    data.insert(userBody)
        .then(resource => {
            res.status(201).json(userBody)
        })
        .catch(error => {
            res.status(500).json({ error: "error posting user" })
        })
});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res, next) => {
    data.get()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(error => {
            res.status(500).json({ error: "server error getting" })
        })
});

router.get('/:id', validateUserId, (req, res) => {
    data.getById(req.user.id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(error => {
            res.status(500).json({ error: "server error getting by ID" })
        })
});

router.get('/:id/posts', validateUserId, (req, res) => {

});

router.delete('/:id', validateUserId, (req, res) => {

    data.remove(req.user.id)
        .then(count => {
            // res.status(200).json({ message: "successfully deleted"})
            res.status(200).json({ "count of deleted records": count})
        })
        .catch(error => {
            res.status(500).json({ error: "server error deleting by ID" })
        })
});

router.put('/:id', validateUserId, validateUser, (req, res) => {
    const changes = req.body;
    data.update(req.user.id, changes)
        .then(count => {
            res.status(200).json({ "count of updated records": count})
        })
        .catch(err => {
            res.status(500).json({ error: "error updating user" })
        })
});

//custom middleware

function validateUserId(req, res, next) {
    const { id } = req.params;
    req.user = { id: id }
    data.getById(id)
        .then(
            next()
        )
        .catch(error => {
            res.status(400).json({ message: "invalid user id" })
        })
};

function validateUser(req, res, next) {
    if (req.body) {
        if (req.body.name) {
            next()
        } else {
            res.status(400).json({ message: "missing required name field" })
        }
    } else {
        res.status(400).json({ message: "missing user data" })
    }
};

function validatePost(req, res, next) {

};

module.exports = router;

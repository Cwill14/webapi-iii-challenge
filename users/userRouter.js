// const express = 'express';

const router = require('express').Router();

const data = require('./userDb.js');

router.post('/', (req, res) => {

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

// router.get('/:id', validateUserId, (req, res) => {
router.get('/:id', (req, res) => {
    const { id } = req.params;
    data.getById(id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(error => {
            res.status(500).json({ error: "server error getting by ID" })
        })
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

// function validateUserId(req, res, next) {
//     const { id } = req.params;
//     if (id === ) {
//         // store that user object as req.user
//     } else {
//         res.status(400).json({ message: "invalid user id" })
//     }
// };

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;

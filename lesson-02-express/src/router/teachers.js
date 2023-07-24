const express = require('express');
const teachersRouter = express.Router();

teachersRouter.get('/', (req, res) => {
    res.send(`Teacher'name: ${req.query.name}; class:${req.query.class}`);
})

module.exports = teachersRouter;
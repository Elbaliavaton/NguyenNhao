const express = require('express');
const studensRouter = express.Router();

studensRouter.get('/', (req, res) => {
    res.send("THIS IS STUDENTS PAGE")
})

studensRouter.get('/:id', (req, res) => {
    res.send(`Studen ID: ${req.params.id}`)
})



module.exports = studensRouter;
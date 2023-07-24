const express = require('express');
const profileRouter = express.Router();

profileRouter.get('/', (req, res) => {
    res.json({
        name: "Ta Duy Nguyen",
        age: "28",
        address: "Bien Hoa",
    })
})

module.exports = profileRouter;
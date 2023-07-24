const express = require('express');
const authRouter = express.Router();

authRouter.post('/login', (req, res) => {
    res.json({
        result: "Dang Nhap Thanh Cong"
    });
});

authRouter.get('/:id', (req, res) => {
    res.json({
        name: 'TaDuyNguyen',
        email: 'taduynguyen@gmail.com'
    });
});

module.exports = authRouter;
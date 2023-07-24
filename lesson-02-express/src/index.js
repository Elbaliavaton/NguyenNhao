const express = require('express');
const authRouter = require('./router/auth');
const profileRouter = require('./router/profile');
const studensRouter = require('./router/studens');
const teachersRouter = require('./router/teachers');
const app = express();
const PORT = 8888;

app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/students', studensRouter);
app.use('/teachers', teachersRouter);

app.get('/', (req, res) => {
    res.send('Hello!!!!!')
});



app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Sever starting on http://localhost:${PORT}`);
    } else {
        console.log(err);
    }
});
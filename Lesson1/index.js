
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({ message: "MindX School" });
})

app.listen(3333, () => {
    console.log(`Sever is running on PORT: 3333`);
});
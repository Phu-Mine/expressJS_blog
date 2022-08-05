const express = require('express')
const app = express()
const port = 4000

app.get('/trangchu', (req, res) => {
    var one = 1;
    var two = 2;
    var three = 3;
    res.send('Hello World! I am Phu')
})

// app.listen(port, '127.0.0.1', () => { console.log("site is running") });
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 

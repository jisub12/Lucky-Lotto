// express cors

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors({
    origin : "http://127.0.0.1:5504/",
    credentials : true
}));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'lotto.html'))
})

app.listen(7777, ()=> {
    console.log("7777 Server Open")
})
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(cors({
    origin : "http://127.0.0.1:5504/",
    credentials : true
}));

app.use(express.static(__dirname));

app.use('/public/assets', express.static(path.join(__dirname, 'public', 'assets')));

app.get('/', (req, res) => {
    const page = fs.readFileSync('./public/lotto.html',"utf-8");
    res.send(page);
})

app.get('/crossfit', (req, res) => {
    const page2 = fs.readFileSync('./public/crossfit.html', "utf-8");
    res.send(page2);
})

app.listen(7777, ()=> {
    console.log("7777 Server Open")
})

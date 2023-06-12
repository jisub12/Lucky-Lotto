const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors({
    origin : "http://127.0.0.1:5504/",
    credentials : true
}));

app.get('/lotto.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'lotto.html'))
})

app.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, 'robots.txt'))
})

app.get('/sitemap.xml', (req, res) => {
    res.sendFile(path.join(__dirname, 'sitemap.xml'))
})

app.listen(7777, ()=> {
    console.log("7777 Server Open")
})

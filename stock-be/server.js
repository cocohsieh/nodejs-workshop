const express = require("express");
//初始化 dotenv
require('dotenv').config()
//利用 express框架/函式庫 來建立web app
const app = express();
// const port = 3001;
const port = process.env.SERVER_PORT;

//首頁網址
app.get('/',(req, res) => {
    res.send('hello express');
});

//做listen的port
app.listen(port, () => {
  console.log(`server start at ${port}`);
});

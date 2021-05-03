const fs = require('fs')
const path = require('path')
const cors = require('cors')
const multer = require('multer')
const crypto = require('crypto')
const express = require('express')
const request = require('request')
const querystring = require('querystring')
const cookieParser = require('cookie-parser')


const app = express()



app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("views", "./views");
app.set("view engine", "ejs");


app.use(cors()).use(cookieParser())





app.get('/',(req,res)=>{
    res.render('multipleLogins');
});

app.get('/millionSongDataSet',(req,res)=>{
    res.render('millionSongDataSet');
})


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Login Server running on port ${port} `))

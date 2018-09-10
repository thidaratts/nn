const express = require('express')
const mongodb = require('mongodb')

 //คำสั่ง server
var app = express() //เรียกใช้เสมอ ถ้าใช้ express

app.get('/',(req,res) => {
    res.send('Hello')
})

app.listen(3000,()=>{
    console.log('is linten on port 3000')
})

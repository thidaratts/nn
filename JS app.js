const express = require('express')
const mongodb = require('mongodb')

 //คำสั่ง server
var app = express() //เรียกใช้เสมอ ถ้าใช้ express

let student = [
    {
        id: 'st1',name:'aaa'
    },
    {
        id:'st2',name:'bbb'
    },
    {
        id:'st2',name:'ccc'
    },
]

app.get('/',(req,res) => {
    res.send('Hello')
})
 //ข้อมูล นร ทุกคน
app.get('/all-student',(req,res) =>{
    res.send(student)
})

app.get('/all-student/id/:id',(req,res) =>{
    let studentID = req.params.id
    for(let i=0;i<student.length;i++){
        if(studentID == student[i].id){
            res.send(student[i])
            break
        }

    }
    res.send('not found this id : ' + studentID)
})

app.get('/all-student/name/:name',(req,res) =>{
    let studentname = req.params.name
    for(let i=0;i<student.length;i++){
        if(studentname == student[i].name){
            res.send(student[i])
            break
        }

    }
    res.send('not found this name : ' + name)
})

app.listen(3000,()=>{
    console.log('is linten on port 3000')
})

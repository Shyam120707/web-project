const express = require('express')

const app = express()

const port = process.env.PORT || 8080

app.use(express.static("frontend"))

app.listen(port,function (){
    console.log("my app is running at http://localhost:"+port)
})
 const user=[{
    "id": 1,
    "name":"Mr Mathias Møller",
    "gender" : "male",
    "image": "https://randomuser.me/api/portraits/men/73.jpg"
 },
 {
    "id":2,
    "name": "Mr Davut Türkdoğan",
    "gender":"male",
    "image":"https://randomuser.me/api/portraits/men/87.jpg",
 },
 {
    "id": 3,
    "name":"Mr José María Armas",
    "gender":"male",
    "image":"https://randomuser.me/api/portraits/men/88.jpg",
 }


]
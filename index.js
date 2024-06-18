
// const mongoose = require("mongoose")
// const express = require("express")
//  require('./connection')



// const app = express()

// app.listen(5500, () => {
//     console.log('server connected on port 5500')
// })

// // mongoose.connect("mongodb://localhost:27017/test")
// // .then( () => {
// //     console.log("connection established... ")
// // })
// // .catch((err) => {
// //     console.log(err)
// // })

// // const userSchema = mongoose.Schema({
// //     name:String,
// //     city:String,
// //     phone:Number,
// //     email:String
// // })

// // const usersModel = new mongoose.model('user',userSchema)


const express = require("express");
const app = express();

const port =  7000

//DB connection

require("./connection")

app.get("/", (req, res) => {
    res.send("hello babu connected")
})


app.listen(port, () => {
    console.log(`server is running at port : ${port}`)
})
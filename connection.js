

// const mongoose = require("mongoose")


// mongoose.connect("mongodb://localhost:27017")
// .then( () => {
//     console.log(" mongoose server connection established... ")
// })
// .catch((err) => {
//     console.log(err)
// })

const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/college")
.then(()=>{
    console.log("connection is estabilshed")

})
.catch((err)=>{
    console.log(`error is : ${err}`)
})

// const userSchema = mongoose.Schema({
//     name:String,
//     city:String,
//     phone:Number,
//     email:String
// })

// const usersModel = new mongoose.model('user',userSchema)

// module.exports = usersModel
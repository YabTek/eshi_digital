const express = require('express')
const mongoose = require("mongoose")
const app = express()
const port = 5000
const userRouter = require('./src/Routes/userRoutes')
const bookRouter = require('./src/Routes/bookRoutes')

app.use(express.json())
app.use('/api/v1/auth',userRouter)
app.use('/api/v1/books',bookRouter)


mongoose.connect("mongodb://127.0.0.1:27017/eshi")
     .then(()=>console.log("connected to mongoDB"))
     .catch(err=>console.log(err))

app.put("/",(req,res)=>{
    res.send("<h1>hello world</h1>")

})
app.get('/',(req,res)=>{
    console.log(req)
    res.json({
        "name": "mihret",
        "type": "cute friend"
    })
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
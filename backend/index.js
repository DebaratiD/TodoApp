import express from 'express'
import * as dotenv from 'dotenv'

import connectDB from './mongodb/connect.js'
import routes from './Routes/Todos.js'

dotenv.config()

const app = express()
app.use(express.json({limit:'50mb'}))

//apis
app.use('/api/todos', routes)

app.get('/',(req,res)=>{
    res.send("Welcome to the todo app!")
})

const startApp = async()=>{
    try{
    connectDB(process.env.MONGODB_URL);
    app.listen(5000, ()=>console.log("Server started on port 5000"))
    }
    catch(error){
        console.log(error);
    }
}
startApp();
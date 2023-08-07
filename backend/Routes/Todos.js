import express from "express"
import Todo from "../mongodb/models/todo.js"

const router = express.Router()

//Routes:
router.get("/",async(req,res)=>{
    try {
     const todos = await Todo.find({}) 
     res.status(200).json({ success:true, data:todos})  
    } catch (error) {
        res.status(500).json({ success:false, message:error});
    }
})

router.post("/",async (req,res)=>{
    try {
        const {title, time, location, date, author} = req.body
        let newObj = {
            title,
            date,
            author
        };
        if(location){
            newObj[location]=location
        }
        if(time){
            newObj[time] = time
        }

        const newPost = await Todo.create(newObj);
        res.status(201).json({ success:true, data:newPost})
    } catch (error) {
        res.status(500).json({ success:false, message:error })
    }
})

router.delete("/",async(req,res)=>{
    try {
        const idList = req.body;
        await idList.forEach(ele => {
            const d = Todo.findOneAndRemove({_id:ele});
        });
        res.status(201).json({success:true, data:d})
    } catch (error) {
        res.status(500).json({success:false, message:error})
    }
})

export default router
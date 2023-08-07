import mongoose from 'mongoose'

const Todo = new mongoose.Schema({
    title: { type:String, required:true },
    time: { type:String },
    location: { type:String },
    date: {type: Date, default: Date.now},
    author:{type: String, required: true }
})

const TodoSchema = mongoose.model('Todo', Todo)

export default TodoSchema
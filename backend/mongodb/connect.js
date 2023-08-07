import mongoose, { connect} from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true)

    //connect to db
    mongoose.connect(url, {dbName:'todoapp'})
    .then(()=>console.log('TodoApp db connected'))
    .catch((err)=>console.log(err))

}

export default connectDB;
import mongoose from "mongoose";


console.log(process.env.MONGO_URI);

const connectDB = async () => {
try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database Connected Successfully");
    
} catch (error) {
    console.log("DataBase Conenction Failed...",error);
    
}
}


export default connectDB
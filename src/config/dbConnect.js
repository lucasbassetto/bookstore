import mongoose from "mongoose";

async function connectDatabase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.o0pu6wu.mongodb.net/bookstore?retryWrites=true&w=majority");
      
    return mongoose.connection;
    
  };
  
  export default connectDatabase;
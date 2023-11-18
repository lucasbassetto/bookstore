import mongoose from "mongoose";

async function connectDatabase() {
    mongoose.connect(process.env.DB_CONNECETION);
      
    return mongoose.connection;
    
  };
  
  export default connectDatabase;
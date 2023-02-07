const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try{
        const conn = mongoose.connect(process.env.MONGODB_URL); 
        console.log("Database connection Successful")//change ig doesnt connect
    }
   catch(error){
    console.log("Database error");
   }
};
module.exports = dbConnect;
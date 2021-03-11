const mongoose = require("mongoose");
const mongoUri = "mongodb+srv://elvisciuffetelli:7WqEGCU3B8syAvrC@clusterfree.w26zl.mongodb.net/takeNotes?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true
    });
    console.log(`MONGODB Connected : ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
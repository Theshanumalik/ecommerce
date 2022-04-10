const mongoose = require("mongoose");

const url =
  "mongodb+srv://theshanumalik:i4U4zXfwjCZ6keWx@cluster0.p9na2.mongodb.net/ecommerce?retryWrites=true&w=majority";

module.exports = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database connection successful");
  } catch (error) {
    console.log(error);
  }
};

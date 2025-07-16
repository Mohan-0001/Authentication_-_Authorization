const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app")

dotenv.config();



mongoose.connect(process.env.MONGO_URI);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb Connected Successfully");
  } catch (error) {
    console.log("Error connecting to MONGODB ", error);
    process.exit(1); //exit with failure
  }
};


app.get('/', (req, res) => {
  res.send('API is working!');
});


connectDB();

const port = process.env.PORT || 5000;

app.listen(port , () => {
    console.log(`App is running on PORT: ${port}`);
})
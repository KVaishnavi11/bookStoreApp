import express from "express";
const app = express()
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.js";
import userRoute from "./route/user.js";
import cors from "cors";

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4001;
const URI =process.env.MongoDBURI;

//connect to mongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Connected to MongoDB")
} catch (error) {
 console.log("Error", error);
}

//defining the Route
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 4000;
const url =
  "mongodb+srv://naruto:naruto@cluster0.ddp57.mongodb.net/ecommerce?retryWrites=true&w=majority";

app.get("/", (req, res) => res.send(`Hello There`));

mongoose
  .connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT))
  .then((res) => console.log(`Server is running on ${PORT}`))
  .catch((err) => console.log(err));



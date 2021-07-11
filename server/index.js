import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import authRoutes from "./Routes/auth.js";
import cartRoutes from "./Routes/cart.js";
import orderRoutes from "./Routes/order.js";
import productRoutes from "./Routes/product.js";
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const PORT = process.env.PORT || 4000;
const url =
  "mongodb+srv://naruto:naruto@cluster0.ddp57.mongodb.net/ecommerce?retryWrites=true&w=majority";

// Routes*****

// Home Route
app.get("/", (req, res) => res.send(`Hello There`));
// auth Routes
app.use("/api", authRoutes);
// cart Routes
app.use("/api", cartRoutes);

// order Routes
app.use("/api", orderRoutes);

// product Routes
app.use("/api", productRoutes);

// Routes END****
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT))
  .then(() => console.log(`Server is running on ${PORT}`))
  .catch((err) => console.log(err));

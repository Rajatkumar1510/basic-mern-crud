import express from "express";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../Controllers/productController.js";
const router = express.Router();

router.get("/items", getProducts);
router.get("/items/:id", getProduct);
router.post("/items", addProduct);
router.put("/items/:id", updateProduct);
router.delete("items/:id", deleteProduct);

export default router;

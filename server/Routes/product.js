import express from "express";
import {
  getProducts,
  // getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../Controllers/productController.js";
const router = express.Router();

router.get("/products", getProducts);
// router.get("/products/:id", getProduct);
router.post("/products", addProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;

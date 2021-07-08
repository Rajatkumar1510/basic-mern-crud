import express from "express";
import {
  getCartProducts,
  addCartProduct,
  deleteCartProduct,
} from "../Controllers/cartController.js";
const router = express.Router();

router.get("/cart/:id", getCartProducts);
router.post("/cart/:id", addCartProduct);
router.delete("/cart/:userId/:productId", deleteCartProduct);
export default router;

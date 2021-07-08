import express from "express";
import { getOrders, checkOut } from "../Controllers/orderController.js";
const router = express.Router();
router.get("/order/:id", getOrders);
router.post("/order/:id", checkOut);
export default router;

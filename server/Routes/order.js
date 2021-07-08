import express from "express";
import {} from "../Controllers/orderController.js";
const router = express.Router();
router.get("/order/:id");
router.post("/order/:id");
export default router;

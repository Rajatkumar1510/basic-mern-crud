import express from "express";
import {} from "../Controllers/cartController.js";
const router = express.Router();

router.get("/cart/:id");
router.post("/cart/:id");
router.delete("/cart/:userId/:productId");
export default router;

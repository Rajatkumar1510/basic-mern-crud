import express from "express";
import itemController from "../Controllers/itemController.js";
const router = express.Router();

router.get("/items", itemController.get_items);
router.get("/items/:id", itemController.get_single_item);

router.post("/items", itemController.post_item);
router.put("/items/:id", itemController.update_item);
router.delete("items/:id", itemController.delete_item);

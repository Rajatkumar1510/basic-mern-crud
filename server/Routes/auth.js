import express from "express";
import authController from "../Controllers/authController.js";
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/user", auth, authController.get_user);

export default router;

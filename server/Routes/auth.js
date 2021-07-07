import express from "express";
import { register, login, get_user } from "../Controllers/authController.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", get_user);

export default router;

import express from "express";
import { register, login, get_users } from "../Controllers/authController.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", get_users);
// router.get("/user/:id", get_user);

export default router;

import { Router } from "express";
const router = Router();
// getting user controller
import { details, updateHabit } from "../controllers/details_controller.js";
router.get("/", details);
// update route for habits
router.post("/update-habit/", updateHabit);

export default router;

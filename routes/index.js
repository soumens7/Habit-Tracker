import { Router } from "express";
const router = Router();
import detailsRouter from "./details.js"; // Import the details router
// getting homepage controller
import {
  home,
  createHabit,
  deleteHabit,
} from "../controllers/home_controller.js";
router.get("/", home);
// create habit route
router.post("/create-habit", createHabit);
// delete habit route
router.get("/delete-habit", deleteHabit);
// use details routes
router.use("/details", detailsRouter);

export default router;

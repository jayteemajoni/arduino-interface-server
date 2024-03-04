import express from "express";
import { changeBuzzerState } from "../controllers/buzzer-controller.js";

const router = express.Router();

router.post(`/`, changeBuzzerState);

export default router;

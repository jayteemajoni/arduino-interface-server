import express from "express";
import { changeLEDState } from "../controllers/led-controller.js";

const router = express.Router();

router.post(`/`, changeLEDState);

export default router;

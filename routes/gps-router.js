import express from "express";
import { getLatestGPSInfo } from "../controllers/gps-controller.js";

const router = express.Router();

router.get(`/`, getLatestGPSInfo);

export default router;

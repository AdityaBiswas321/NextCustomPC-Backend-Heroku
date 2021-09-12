import express from "express";
const router = express.Router();
import { paymentIntents } from "../controllers/paymentIntentsController.js";

router.route("/").post(paymentIntents);

export default router;

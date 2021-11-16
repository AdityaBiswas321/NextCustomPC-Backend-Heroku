import express from "express";
const router = express.Router();
import { shipping } from "../controllers/shippingController.js";

router.route("/").post(shipping);

export default router;

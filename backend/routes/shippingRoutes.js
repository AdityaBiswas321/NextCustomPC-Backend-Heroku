import express from "express";
const router = express.Router();
import { shipping } from "../controllers/shippingController.js";

router.route("/").get(shipping);

export default router;

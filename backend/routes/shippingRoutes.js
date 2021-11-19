import express from "express";
const router = express.Router();
import { shipping, validate } from "../controllers/shippingController.js";

router.route("/").post(shipping);
router.route("/validate").post(validate);

export default router;

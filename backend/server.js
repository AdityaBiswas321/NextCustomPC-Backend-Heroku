import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import leadsRoutes from "./routes/leadsRoutes.js";
import paymentIntentsRoutes from "./routes/paymentIntentsRoutes.js";
import cors from "cors";
import path from "path";

dotenv.config();
connectDB();
console.log(process.env.PORT);

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/lead", leadsRoutes);
app.use("/api/payment_intents", paymentIntentsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Serveer running ${process.env.NODE_ENV} mode port ${PORT}`)
);

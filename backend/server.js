import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
import colors from "colors";
import { errorHandler } from "./middleware/errorMiddleware.js";
import goalRoutes from "./routes/goalRoutes.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: "false" }));

app.use("/api/goals", goalRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

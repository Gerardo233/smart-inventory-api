import express from "express";
import cors from "cors";
import morgan from "morgan";
import categoryRouter from "./routes/categories.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/categories", categoryRouter);

export default app;

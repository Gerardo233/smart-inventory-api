import express from "express";
import cors from "cors";
import morgan from "morgan";
import categoryRouter from "./routes/categories.routes";
import { globalErrorHandler } from "./middlewares/globalError.middelware";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/categories", categoryRouter);

app.use(globalErrorHandler);
export default app;

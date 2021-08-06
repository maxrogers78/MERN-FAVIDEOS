import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
const app: Application = express();

import videoRoutes from "./routes/videos.routes";

app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(videoRoutes);

export default app;

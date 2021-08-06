import express, { Application } from "express";
const app: Application = express();

app.set("port", process.env.PORT || 4000);

export default app;

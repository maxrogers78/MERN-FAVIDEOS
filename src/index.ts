import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import "./database";

const port = app.get("port");

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});

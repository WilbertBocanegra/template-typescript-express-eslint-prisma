import { Router, IRouter } from "express";

const app: IRouter = Router();

app.get("/hello", (req, res) => {
  res.send("hello world");
});

export default app;

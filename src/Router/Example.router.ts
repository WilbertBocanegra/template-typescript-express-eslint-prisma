import { Router, IRouter } from "express";

import { ExampleController } from "@controller";

const app: IRouter = Router();

app.get("/hello", ExampleController.ExampleReadController);

export default app;

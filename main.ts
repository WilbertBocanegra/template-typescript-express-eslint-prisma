import express from "express";
import cors from "cors";

import { color, config } from "@utils";
import { ExampleRouter } from "@router";

const app: express.Application = express();

const PORT: number = 3000;
const HOST: string = "0.0.0.0";

app.use(cors());
app.use(express.json());
app.use("/", ExampleRouter);

app.listen(PORT, HOST, () => {
  console.log(color.success(`> Listening on PORT ${config.PORT}`));
});

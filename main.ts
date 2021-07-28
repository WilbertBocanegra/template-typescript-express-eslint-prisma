import express from "express";
import cors from "cors";

import { color, config } from "@utils";
import { ExampleRouter } from "@router";

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", ExampleRouter);

app.listen(config.PORT, config.HOST, () => {
  console.log(color.success(`> Listening on PORT ${config.PORT}`));
});

import { Handler } from "express";

import { color } from "@utils";

const ExampleMiddleware: Handler = (req, res, next) => {
  console.log(color.warning("hello from middleware example"));
  next();
};

export default ExampleMiddleware;

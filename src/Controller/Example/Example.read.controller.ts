import { Request, Response } from "express";

const ExampleReadController = (req: Request, res: Response) => {
  res.json({ data: { title: "hello example" }, errors: {} });
};

export default ExampleReadController;

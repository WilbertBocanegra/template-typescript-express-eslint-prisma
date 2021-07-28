import dotenv from "dotenv";

import { IConfig } from "@interfaces";
import { color } from "@utils";

const env = dotenv.config();

if (env.error) {
  throw console.log(color.error(env.error));
}

const config: IConfig = {
  PORT: Number(process.env.PORT),
  HOST: String(process.env.HOST)
};

export default config;

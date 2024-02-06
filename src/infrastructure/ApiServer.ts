import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

import ItemsRoute from "./items.routes";

dotenv.config();

export class ApiServer {
  public static async run(port: number): Promise<any> {
    const app = express();
    app.use(express.json());

    morgan("tiny");

    app.use("/api/items", ItemsRoute);

    app.listen(port, () => {
      console.log(`server is running at port: ${port} `);
    });
    return app;
  }
}

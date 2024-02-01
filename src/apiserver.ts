import express from "express";
import morgan from "morgan";

export class ApiServer {
  public static async run(port: number): Promise<void> {
    const app = express();
    app.use(express.json());

    morgan("tiny");

    app.listen(port, () => {
      console.log(`server is running at port: ${port} `);
    });
  }
}

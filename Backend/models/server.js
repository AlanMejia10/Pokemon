import express from "express";

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.routes();
    this.listen();
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("hello world");
    });
  }

  listen() {
    this.app.listen(3000, () => {
      console.log(`process running on port ${this.port}`);
    });
  }
}

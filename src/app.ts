// src/app.ts
import express, { Application, Request, Response } from "express";
import HelloController from "./controllers/hello.controller";

class App {
  private readonly app: Application;
  private readonly port: string | number;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    this.setup();
  }

  private setup(): void {
    this.app.use(express.json());
    this.app.use(express.static("public"));
    this.setupControllers();
    this.setupStatusEndpoint();
  }

  private setupControllers(): void {
    new HelloController(this.app);
  }

  private setupStatusEndpoint(): void {
    this.app.get('/status', (req: Request, res: Response) => {
      res.json({ environment: process.env.NODE_ENV || 'unknown' });
    });
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
    });
  }
}

export default App;

// src/controllers/hello.controller.ts
import { Application, Router, Request, Response, NextFunction } from "express";
import Controller from "./controller";

class HelloController implements Controller {
  private readonly router: Router = Router();
  private readonly path: string = "/";

  constructor(app: Application) {
    this.setupRoutes(app);
  }

  private hello = (req: Request, res: Response, next: NextFunction): void => {
    res.send("Hello world!!!");
  };

  public setupRoutes(app: Application): void {
    this.router.get(this.path, this.hello);
    app.use(this.path, this.router);
  }
}

export default HelloController;

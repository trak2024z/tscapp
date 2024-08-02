// src/controllers/controller.ts
import express from "express";

interface Controller {
  setupRoutes(app: express.Application): void;
}

export default Controller;

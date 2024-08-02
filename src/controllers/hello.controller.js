"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/controllers/hello.controller.ts
const express_1 = require("express");
class HelloController {
    constructor(app) {
        this.router = (0, express_1.Router)();
        this.path = "/";
        this.hello = (req, res, next) => {
            res.send("Hello world!!!");
        };
        this.setupRoutes(app);
    }
    setupRoutes(app) {
        this.router.get(this.path, this.hello);
        app.use(this.path, this.router);
    }
}
exports.default = HelloController;

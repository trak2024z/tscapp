"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const hello_controller_1 = __importDefault(require("./controllers/hello.controller"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 8080;
        this.setup();
    }
    setup() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
        this.setupControllers();
        this.setupStatusEndpoint();
    }
    setupControllers() {
        new hello_controller_1.default(this.app);
    }
    setupStatusEndpoint() {
        this.app.get('/status', (req, res) => {
            res.json({ environment: process.env.NODE_ENV || 'unknown' });
        });
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
        });
    }
}
exports.default = App;

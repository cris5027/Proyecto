"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IncuestaRouters {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('crea encuesta'));
    }
}
const EncuestaRouters = new IncuestaRouters();
exports.default = EncuestaRouters.router;

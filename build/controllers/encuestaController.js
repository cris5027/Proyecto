"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class encuestaController {
    Index(req, res) {
        res.send('Bienvenido a crear su encuesta');
        database_1.default.query('DESCRIBE encuesta ');
        res.json('encuesta');
    }
}
const EncuestaController = new encuestaController();
exports.default = encuestaController;

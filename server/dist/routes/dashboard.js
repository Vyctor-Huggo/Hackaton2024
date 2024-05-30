"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/dashboard.ts
const express_1 = __importDefault(require("express"));
const authenticateToken_1 = require("../middlewares/authenticateToken");
const router = express_1.default.Router();
router.get('/dashboard', authenticateToken_1.authenticateToken, (req, res) => {
    res.json({ message: 'Bem-vindo ao Dashboard!' });
});
exports.default = router;

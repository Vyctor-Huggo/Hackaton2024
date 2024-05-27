"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretkey_1 = __importDefault(require("../configs/secretkey"));
const prisma_1 = __importDefault(require("../prisma"));
const router = express_1.default.Router();
// Rota de login
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    console.log('Received auth request with username: ', username, " with pass: ", password, " with email: ", email);
    try {
        const user = yield prisma_1.default.user.create({
            data: {
                email: email,
                name: username,
                password: password
            },
        });
        const token = jsonwebtoken_1.default.sign({ user }, secretkey_1.default, { expiresIn: '1h' });
        res.status(201).json({ token });
    }
    catch (error) {
        res.status(401).json({ message: 'Credenciais inválidas' });
        console.log(error);
    }
}));
// Rota de logout
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            // Trate o erro aqui
            console.error('Erro ao destruir a sessão:', err);
        }
        else {
            // A sessão foi destruída com sucesso
            console.log('Sessão destruída com sucesso');
            res.redirect('/auth/login'); // Redireciona para a página de login, por exemplo
        }
    });
});
exports.default = router;

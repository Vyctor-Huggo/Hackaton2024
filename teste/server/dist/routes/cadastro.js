"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Rota de login
router.post('/login', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: 'Nenhum JSON recebido na requisição' });
    }
    // Acesso aos dados JSON recebidos na requisição
    const jsonData = req.body;
    // Faça o que quiser com os dados JSON
    console.log('JSON recebido:', jsonData);
    // Lógica de autenticação aqui  
    req.session.user = { id: 1, username: 'user@example.com' }; // Exemplo de usuário autenticado
    res.send('Login bem-sucedido!');
});
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
            res.redirect('/login'); // Redireciona para a página de login, por exemplo
        }
    });
});
exports.default = router;

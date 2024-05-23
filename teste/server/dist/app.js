"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const crypto_1 = __importDefault(require("crypto"));
const cadastro_1 = __importDefault(require("./routes/cadastro"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Configuração do express-session
const secretKey = crypto_1.default.randomBytes(32).toString('hex');
app.use((0, express_session_1.default)({
    secret: secretKey,
    resave: false,
    saveUninitialized: true
}));
// Rota principal
app.get('/', (req, res, next) => {
    res.send('Bem-vindo ao meu aplicativo Express com sessões!');
});
// Rotas de autenticação
app.use('/auth', cadastro_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

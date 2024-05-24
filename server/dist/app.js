"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const crypto_1 = __importDefault(require("crypto"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(body_parser_1.default.json());
// Configuração do express-session
const secretKey = crypto_1.default.randomBytes(32).toString('hex');
app.use((0, express_session_1.default)({
    secret: secretKey,
    resave: false,
    saveUninitialized: true
}));
// Rotas de autenticação
app.use('/auth', auth_1.default);
// Rota principal
app.get('/', (req, res, next) => {
    res.send('Bem-vindo ao meu aplicativo Express com sessões!');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

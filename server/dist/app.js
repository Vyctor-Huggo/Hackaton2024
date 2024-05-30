"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const secretkey_1 = __importDefault(require("./configs/secretkey"));
//middlewares
const authenticateToken_1 = __importDefault(require("./middlewares/authenticateToken"));
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
//importando rotas
const auth_1 = __importDefault(require("./routes/auth"));
const dashboard_1 = __importDefault(require("./routes/dashboard"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use((0, express_session_1.default)({
    secret: secretkey_1.default,
    resave: false,
    saveUninitialized: true
}));
// Rotas de autenticação
app.use('/auth', auth_1.default);
app.use('/api', authenticateToken_1.default, dashboard_1.default);
// Rota Not Found
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});
//Rota de Erro
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.status(err.status || 500);
    res.json({ message: err.message });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

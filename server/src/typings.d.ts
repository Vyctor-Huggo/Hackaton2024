import { Session } from 'express-session';

declare module 'express-session' {
  interface SessionData {
    user?: { id: number; username: string }; // Defina as propriedades que você deseja incluir na sessão do usuário
  }
}
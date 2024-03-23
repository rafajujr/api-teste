import dotenv from 'dotenv';
dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/HomeRoutes';
import userRoutes from './src/routes/UserRoutes';
import tokenRoutes from './src/routes/TokenRoutes';
import alunoRoutes from './src/routes/AlunoRoutes';
import fotoRoutes from './src/routes/FotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/token/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;

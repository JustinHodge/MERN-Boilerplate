import express from 'express';
import { homeRoute } from './home';

export const routes = express.Router();

routes.use(homeRoute);

export default routes;

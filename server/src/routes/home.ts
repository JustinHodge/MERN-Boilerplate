import express, { NextFunction, Response, Request } from 'express';
import { getHome } from '../controllers/home';

export const homeRoute = express.Router();

homeRoute.get('/', getHome);

export default homeRoute;

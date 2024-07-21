import express from 'express';
import { createOrder } from '../controllers/order.controller.js';

const orderRouter = express.Router();

orderRouter.post('/create', createOrder);

export { orderRouter };

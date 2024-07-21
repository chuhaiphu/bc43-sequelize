import express from 'express';
import { addRating, getRatingsByRestaurant, getRatingsByUser } from '../controllers/rate_res.controller.js';

const rateResRouter = express.Router();

rateResRouter.post('/add', addRating);
rateResRouter.get('/restaurant/:res_id', getRatingsByRestaurant);
rateResRouter.get('/user/:user_id', getRatingsByUser);

export { rateResRouter };

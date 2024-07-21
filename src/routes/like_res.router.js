import express from 'express';
import { likeRestaurant, unlikeRestaurant, getLikesByRestaurant, getLikesByUser } from '../controllers/like_res.controller.js';

const likeResRouter = express.Router();

likeResRouter.post('/like', likeRestaurant);
likeResRouter.post('/unlike', unlikeRestaurant);
likeResRouter.get('/restaurant/:res_id', getLikesByRestaurant);
likeResRouter.get('/user/:user_id', getLikesByUser);

export { likeResRouter };

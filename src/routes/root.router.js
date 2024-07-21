import express from 'express'
import { orderRouter } from "./order.router.js";
import { likeResRouter } from './like_res.router.js';
import { rateResRouter } from './rate_res.router.js';

const rootRouter = express.Router();

rootRouter.use("/order", orderRouter)
rootRouter.use("/like-res", likeResRouter)
rootRouter.use("/rate-res", rateResRouter)

export { rootRouter }

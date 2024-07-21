import { db_food_ordering_system_orm } from '../models/connect.js';
import initModels from '../models/init-models.js';

const models = initModels(db_food_ordering_system_orm);

export const createOrder = async (req, res) => {
    try {
        const { user_id, food_id, amount, code } = req.body;

        const newOrder = await models.orders.create({
            user_id,
            food_id,
            amount,
            code,
            order_date: new Date()
        });

        res.status(201).json({
            success: true,
            message: 'Order created successfully',
            data: newOrder
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create order',
            error: error.message
        });
    }
};

import { responseData } from '../config/response.js';
import { db_food_ordering_system_orm } from '../models/connect.js';
import initModels from '../models/init-models.js';

const models = initModels(db_food_ordering_system_orm);

export const likeRestaurant = async (req, res) => {
    try {
        const { user_id, res_id } = req.body;
        const newLike = await models.like_res.create({ user_id, res_id });
        responseData(201, "Restaurant liked successfully", newLike, res);
    } catch (error) {
        responseData(500, "Error liking restaurant", error.message, res);
    }
};

export const unlikeRestaurant = async (req, res) => {
    try {
        const { user_id, res_id } = req.body;
        const deletedLike = await models.like_res.destroy({
            where: { user_id, res_id }
        });
        if (deletedLike) {
            responseData(200, "Restaurant unliked successfully", null, res);
        } else {
            responseData(404, "Like not found", null, res);
        }
    } catch (error) {
        responseData(500, "Error unliking restaurant", error.message, res);
    }
};

export const getLikesByRestaurant = async (req, res) => {
    try {
        const { res_id } = req.params;
        const likes = await models.like_res.findAll({
            where: { res_id },
        });
        responseData(200, "Likes retrieved successfully", likes, res);
    } catch (error) {
        responseData(500, "Error retrieving likes", error.message, res);
    }
};

export const getLikesByUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const likes = await models.like_res.findAll({
            where: { user_id },
        });
        responseData(200, "Likes retrieved successfully", likes, res);
    } catch (error) {
        responseData(500, "Error retrieving likes", error.message, res);
    }
};

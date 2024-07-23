import { responseData } from "../config/response.js";
import initModels from "../models/init-models.js";
import { db_food_ordering_system_orm } from "../models/connect.js";

const models = initModels(db_food_ordering_system_orm);

export const addRating = async (req, res) => {
  try {
    const { user_id, res_id, amount } = req.body;
    const newRating = await models.rate_res.create({
      user_id,
      res_id,
      amount,
      date_rate: new Date()
    });
    responseData(201, "Rating added successfully", newRating, res);
  } catch (error) {
    responseData(500, "Error adding rating", error.message, res);
  }
};

export const getRatingsByRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;
    const ratings = await models.rate_res.findAll({
      where: { res_id },
      include: [
        {
          model: models.user,
          as: 'user',
        }
      ]
    });
    responseData(200, "Ratings retrieved successfully", ratings, res);
  } catch (error) {
    responseData(500, "Error retrieving ratings", error.message, res);
  }
};

export const getRatingsByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const ratings = await models.rate_res.findAll({
      where: { user_id },
      include: [
        {
          model: models.restaurant,
          as: 're',
        }
      ]
    });
    responseData(200, "Ratings retrieved successfully", ratings, res);
  } catch (error) {
    responseData(500, "Error retrieving ratings", error.message, res);
  }
};

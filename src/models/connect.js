import { Sequelize } from "sequelize"
import config from "../config/config.js"

const db_food_ordering_system_orm = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect
})

export { db_food_ordering_system_orm }

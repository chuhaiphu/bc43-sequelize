import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class order_sub_food extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orders',
        key: 'order_id'
      }
    },
    sub_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sub_food',
        key: 'sub_id'
      }
    }
  }, {
    sequelize,
    tableName: 'order_sub_food',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "sub_id" },
        ]
      },
      {
        name: "sub_id",
        using: "BTREE",
        fields: [
          { name: "sub_id" },
        ]
      },
    ]
  });
  }
}

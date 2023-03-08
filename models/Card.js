const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Card extends Model { }

Card.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        cardType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cardName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        frontNum: {
            type: DataTypes.INTEGER,
        },
        rightNum: {
            type: DataTypes.INTEGER,
        },
        backNum: {
            type: DataTypes.INTEGER,
        },
        leftNum: {
            type: DataTypes.INTEGER,
        },
        fileName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        backGround: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "card",
    }
);

module.exports = Card;

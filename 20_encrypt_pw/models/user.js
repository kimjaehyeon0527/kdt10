const { DataTypes } = require("sequelize");
const { Sequelize } = require(".");

const User = (Sequelize, DataTypes) => {
    const model = Sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            pw: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(15),
                allowNull: false
            },
            userid: {
                type: DataTypes.STRING(15),
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    )
    return model;
}

module.exports = User;
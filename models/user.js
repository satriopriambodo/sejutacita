"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: "username is required" },
          notNull: { msg: "username is required" },
        },
      },
      email: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Password is required" },
          notNull: { msg: "Password is required" },
          min: {
            args: 6,
            msg: "Password must be at least 6 characters",
          },
        },
      },
      role: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync(8);
          user.password = bcrypt.hashSync(user.password, salt);
        },
        beforeUpdate: (user) => {
          const salt = bcrypt.genSaltSync(8);
          user.password = bcrypt.hashSync(user.password, salt);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

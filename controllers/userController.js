const { User } = require("../models");
const bcrypt = require("bcrypt");
const { token } = require("../helpers/jwt");

const register = async (req, res, next) => {
  try {
    const { username, email, password, role, phoneNumber, address } = req.body;
    const response = await User.create({
      username,
      email,
      password: password,
      role,
      phoneNumber,
      address,
    });
    res.status(201).json({
      id: response.id,
      email: response.email,
      username: response.username,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw { name: "Bad Request" };
    }

    const response = await User.findOne({ where: { username } });
    if (!response) {
      throw { name: "Unauthorized" };
    }

    const isValid = bcrypt.compareSync(password, response.password);
    if (!isValid) {
      throw { name: "Unauthorized" };
    }

    const payload = {
      id: response.id,
      username: response.username,
    };
    const role = response.role;
    const userUsername = response.username;
    res.status(200).json({
      access_token: token(payload),
      userRole: role,
      userUsername: userUsername,
    });
  } catch (err) {
    next(err);
  }
};

const fetchUser = async (req, res, next) => {
  try {
    const result = await User.findAll();
    res.status(200).json({ result });
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { username, email, password, role, phoneNumber, address } = req.body;
    const { id } = req.params;

    const findUser = await User.findByPk(id);
    if (findUser) {
      const result = await User.update(
        {
          username,
          email,
          password,
          role,
          phoneNumber,
          address,
        },
        { where: { id }, returning: true }
      );
      res.status(200).json({ result: result[1][0] });
    } else {
      res.status(404).json({ message: `User id ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findUser = await User.findByPk(id);

    if (!findUser) {
      throw { name: "Bad Request" };
    }

    const deleteUser = await User.destroy({ where: { id: id } });
    res.status(200).json(deleteUser);
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login, fetchUser, updateUser, deleteUser };

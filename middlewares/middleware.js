const { convertToPayload } = require("../helpers/jwt");
const { User } = require("../models");

const authenticationMiddleware = async (req, res, next) => {
  const { access_token } = req.headers;
  try {
    const payload = convertToPayload(access_token);
    // console.log(payload,"<<<<<<<<<<<<<<<<<<payload")

    const user = await User.findOne({
      where: {
        id: payload.id,
        username: payload.username,
      },
    });

    if (!user) {
      throw { name: "User_not_found" };
    }

    req.user = {
      id: user.id,
      username: user.username,
      role: user.role,
    };

    next();
  } catch (err) {
    next(err);
  }
};

const authorizationMiddleware = async (req, res, next) => {
  const userEdit = req.params.id;
  const userId = req.user.id;

  try {
    const findUser = await User.findByPk(userEdit);
    if (!findUser) {
      throw { name: "notfound" };
    }

    const user = await User.findByPk(userId);

    if (user.role === "Admin") {
      next();
    } else {
      throw { name: "forbidden" };
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { authenticationMiddleware, authorizationMiddleware };

const express = require("express");
const router = express.Router();
const {
  register,
  login,
  fetchUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const {
  authenticationMiddleware,
  authorizationMiddleware,
} = require("../middlewares/middleware");

router.post("/register", register);
router.post("/login", login);
router.get("/fetch", fetchUser);

router.use(authenticationMiddleware);

router.put("/:id", authorizationMiddleware, updateUser);
router.delete("/:id", authorizationMiddleware, deleteUser);

module.exports = router;

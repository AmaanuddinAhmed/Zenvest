const { Signup, Login, Logout } = require("../controller/AuthController");
const { userVerification } = require("../middleware/AuthMiddleware");
const {
  validateSignup,
  validateLogin,
} = require("../middleware/ValidationMiddleware");
const router = require("express").Router();

router.post("/signup", validateSignup, Signup);
router.post("/login", validateLogin, Login);
router.post("/logout", Logout);
router.get("/users", userVerification);

module.exports = router;

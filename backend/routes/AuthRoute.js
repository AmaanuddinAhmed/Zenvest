const { Signup, Login, Logout } = require("../controller/AuthController");
const { userVerification } = require("../middleware/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
router.get("/users", userVerification);

module.exports = router;

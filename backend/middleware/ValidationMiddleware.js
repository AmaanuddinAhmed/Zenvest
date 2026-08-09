const { signupSchema, loginSchema } = require("../validation/authValidation");
const { newOrderSchema } = require("../validation/orderValidation");

// same pattern as StaySphere's validateListing/validateReview - Joi validates
// req.body, and we bail out with a 400 before the request reaches Mongo

module.exports.validateSignup = (req, res, next) => {
  const { error } = signupSchema.validate(req.body);
  if (error) {
    const message = error.details.map((el) => el.message).join(", ");
    return res.status(400).json({ message });
  }
  next();
};

module.exports.validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    const message = error.details.map((el) => el.message).join(", ");
    return res.status(400).json({ message });
  }
  next();
};

module.exports.validateNewOrder = (req, res, next) => {
  const { error } = newOrderSchema.validate(req.body);
  if (error) {
    const message = error.details.map((el) => el.message).join(", ");
    return res.status(400).json({ message });
  }
  next();
};

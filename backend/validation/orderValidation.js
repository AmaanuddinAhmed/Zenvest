const Joi = require("joi");

module.exports.newOrderSchema = Joi.object({
  name: Joi.string().required(),
  qty: Joi.number().integer().min(1).required(),
  price: Joi.number().min(0).required(),
  mode: Joi.string().valid("BUY", "SELL").required(),
});

const Joi = require("joi");

const userValidation = (req, res, next) => {
  const schema = Joi.object({
    firstname: Joi.string().required().min(3),
    lestname: Joi.string().required().min(3),
    age: Joi.number().required(),
    gender: Joi.string().required().min(3),
    username: Joi.string().required(),
    password: Joi.string().required().min(4),
    email: Joi.string().required(),
    phone: Joi.number().required().min(8).max(10),
    address: Joi.number().required(),
  });
  let { error } = schema.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, msg: error.details[0].message, innerData: null });
  next();
};

module.exports = { userValidation };

const Joi = require("joi");

const productValidation = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    price: Joi.number().required(),
    images: Joi.array().required().min(1),
    description: Joi.string(),
    brand: Joi.string().required(),
    details: Joi.array(),
    category: Joi.string().required(),
  });

  let { error } = schema.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, msg: error.details[0].message, innerData: null });
  next();
};

module.exports = { productValidation };

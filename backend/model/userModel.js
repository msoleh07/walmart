const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lestname: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
  addedTime: { type: Number, default: new Date() },
});

const userDB = model("users", userSchema);

module.exports = { userDB };

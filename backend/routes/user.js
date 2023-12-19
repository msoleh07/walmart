const { Router } = require("express");
const { userDB } = require("../model/userModel");
const { userValidation } = require("../validation/usersValidation");

const users = Router();

users.get("/alluser", async (req, res) => {
  let allUser = await userDB.find();
  if (!allUser.length) {
    return res
      .status(404)
      .json({ success: false, msg: "No user found", innerData: allUser });
  }
  res
    .status(200)
    .json({ success: true, msg: " User found", innerData: allUser });
});

//  create

users.post("/create", [userValidation], async (req, res) => {
  let user = req.body;

  let exactUser = await userDB.findOne({ username: user.username });

  if (exactUser) {
    return res.status(400).json({
      success: false,
      msg: `${user.username} is already registered`,
      innerData: null,
    });
  }
  let newUser = await userDB.create(user);
  let sevedUser = await newUser.save();

  res
    .status(201)
    .json({ success: true, msg: " User created", innerData: sevedUser });
});

module.exports = { users };

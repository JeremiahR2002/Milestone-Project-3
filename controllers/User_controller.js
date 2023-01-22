const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  console.log("WE SMACKED THE GET ROUTER /Users !!!");
  User.find()
    .then((foundUser) => {
      res.json(foundUser); //res.render
    })
    .catch((err) => {
      console.log(err);
      res.json("error404");
    });
});

router.post("/", async (req, res) => {
  console.log("Are you even working bro? New User", req.body);
  const { password, ...rest } = req.body;
  const passwordhash = await bcrypt.hash(password, 12);
  const user = { ...rest, password: passwordhash };
  try {
    const foundUser = await User.create(user);
    res.status(200).json(foundUser);
  } catch (e) {
    res.status(404).json({ message: "error attempting to create a user" });
  }
});

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = router;

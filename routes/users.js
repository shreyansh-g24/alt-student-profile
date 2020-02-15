var express = require("express");
var router = express.Router();
var User = require("../models/users");
var auth = require("../modules/auth");
var jwt = require("jsonwebtoken");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

//create user
router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    var user = await User.create(req.body);
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ msg: "User not created please check" });
  }
});

//login user
router.post("/login", async (req, res) => {
  var { email, password } = req.body;
  try {
    var user = await User.findOne({ email });
    if (!user) return res.json({ error: "email invalid" });
    var match = await user.verifyPassword(password);
    if (!match) return res.json({ error: "password does not match" });
    //jwt token auth
    var payload = { UserId: user.id, email: user.email };
    var token = await jwt.sign(payload, process.env.SECRET);
    user.token = token;
    res.json({ success: "true", token });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;

var express = require("express");
var router = express.Router();
var User = require("../models/users");
var auth = require("../modules/auth");
var jwt = require("jsonwebtoken");

/* GET users listing. */
// router.get("/", function(req, res, next) {
//   res.send("respond with a resource");
// });

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
  console.log(req.body);
  try {
    var user = await User.findOne({ email });
    console.log(user);
    if (!user) return res.json({ error: "email invalid" });
    var match = await user.verifyPassword(password);
    if (!match) return res.json({ error: "password does not match" });
    //jwt token auth
    var payload = { UserId: user.id, email: user.email };
    var token = await jwt.sign(payload, process.env.SECRET);
    res.json({ success: "true", token });
  } catch (error) {
    res.status(400).json(error);
  }
});

//list all users
router.get("/", async (req, res) => {
  try {
    var user = await User.find({});
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ msg: "no user found or your query is invalid" });
  }
});

//update user
router.put("/update", async (req, res) => {
  var UserId = req.user.UserId;
  var updateduser = await User.findByIdAndUpdate(UserId, req.body)
  console.log(updateduser)
})

module.exports = router;

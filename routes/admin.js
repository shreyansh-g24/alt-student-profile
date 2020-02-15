var express = require("express");
var User = require("../models/users");
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  try {
    var admin = await User.find({ isAdmin: true });
    if (!admin) return res.json({ msg: "No admin found" });
    res.json({ success: true, admin });
  } catch (error) {
    res.json({ msg: "Invalid Query" });
  }
});


module.exports = router;

var express = require("express");
var router = express.Router();
var User = require("../models/users");
var Article = require("../models/article");

// router.post("/", (req, res, next) => {
//   Article.create(req.body, (err, newarticle) => {
//     if (err) return;
//   });
//   res.send("hello");
// });

router.post("/register", async (req, res) => {
  console.log(req.body);
  console.log(req.user);
  try {
    var article = await Article.create(req.body);
    res.status(200).json({ success: true, article });
  } catch (error) {
    res.status(400).json({ msg: "Article not created please check" });
  }
});

module.exports = router;

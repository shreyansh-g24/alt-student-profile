var express = require("express");
var router = express.Router();
var User = require("../models/users");
var Article = require("../models/article");
var auth = require("../modules/auth");

// router.post("/", (req, res, next) => {
//   Article.create(req.body, (err, newarticle) => {
//     if (err) return;
//   });
//   res.send("hello");
// });
// create articles
router.post("/create", auth.verifyToken, async (req, res) => {
  console.log(req.body);
  console.log(req.user);
  try {
    req.body.author = req.user.UserId;
    var article = await Article.create(req.body);
    await User.findByIdAndUpdate(req.user.UserId, {
      $push: { articles: article.id }
    });
    var author = await Article.findById(article.id).populate("author");
    res.status(200).json({ success: true, author });
  } catch (error) {
    res.status(400).json({ msg: "Article not created please check" });
  }
});
// send articles
router.get("/", auth.verifyToken, async (req, res) => {
  try {
    var articles = await Article.find({ author: req.user.UserId });
    res.status(200).json({ success: true, articles });
  } catch (error) {
    res.status(400).json({ msg: "no article yet" });
  }
});

// delete articles
router.delete("/delete/:id", auth.verifyToken, async (req, res) => {
  // console.log(req.user);
  // console.log(req.body);
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, msg: "Article deleted" });
  } catch (error) {
    res.status(400).json({ msg: "coudn't find article " });
  }
});

// article update
router.put("/update/:id", auth.verifyToken, async (req, res) => {
  // console.log(req.user);
  // console.log(req.body);
  try {
    var updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({ success: true, updatedArticle });
  } catch (error) {
    res.status(400).json({ msg: "coudn't find article" });
  }
});

module.exports = router;

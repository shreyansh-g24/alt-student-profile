//require
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//model
var articleSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    about: String,
    description: String,
    link: String
  },
  { timestamps: true }
);

//export
module.exports = mongoose.model("Article", articleSchema);

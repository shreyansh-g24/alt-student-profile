//require
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;


//model
var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      match: /@/
    },
    socialLinks: {
      github: {
        type: String,
        default: "http://www.github.com"
      },
      twitter: {
        type: String,
        default: "http://www.twitter.com"
      },
      linkedin: {
        type: String,
        default: "http://www.linkedin.com"
      },
      codeWars: {
        type: String,
        default: "http://www.codeWars.com"
      }
    },
    aboutMe: {
      type: String
    },
    pastExperience: [
      {
        company: String,
        duration: Number,
        position: String
      }
    ],
    projects: [String],
    articles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Article"
      }
    ],
    education: {
      type: [String]
    },
    password: String,
    isApproved: {
      type: Boolean,
      default: false
    },
    isEmployed: {
      type: Boolean,
      default: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    image: {
      type: String
    }
  },
  { timestamps: true }
);

//hash pw
userSchema.pre("save", async function(next) {
  if (this.password && this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  }
  next();
});

//verfiy pw
userSchema.methods.verifyPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

//export
module.exports = mongoose.model("User", userSchema);

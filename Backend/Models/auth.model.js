const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const Authmodel = mongoose.model("SignupAuthData", authSchema);

module.exports = { Authmodel };

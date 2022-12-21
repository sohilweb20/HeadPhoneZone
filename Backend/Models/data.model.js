const mongoose = require("mongoose");

const HeadSChema = mongoose.Schema({
  Title: { type: String, required: true },
  Price: { type: Number, required: true },
  Review: { type: String, required: true },
  Detail: { type: String, required: true },
  Color: { type: String, required: true },
  Poster: { type: String, required: true },
});

const HeadPhoneModel = mongoose.model("HeadPhone", HeadSChema);
module.exports = { HeadPhoneModel };

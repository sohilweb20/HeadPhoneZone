const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();

const connection = mongoose.connect(process.env.mongo_url);
module.exports = { connection };

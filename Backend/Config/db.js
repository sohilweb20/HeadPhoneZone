//monfoose for connected the data
const mongoose = require("mongoose");
//for error fixed in termina;
mongoose.set("strictQuery", true);
//for dotenv file
require("dotenv").config();
//for connected the server with mongoose atlas
const connection = mongoose.connect(process.env.mongo_url);
module.exports = { connection };

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

const { connection } = require("./Config/db");
const { dataRouter } = require("./Routes/data.route");

const PORT = process.env.port || 7000;

require("dotenv").config();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

//running index,js
app.get("/", (req, res) => {
  res.send("hello Backend");
});

app.get("/about", (req, res) => {
  res.send("This data is all about headphoneZone");
});
app.use("/users", dataRouter);

//running port
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
    console.log(process.env.name);
    console.log("listening on port 7000");
  } catch (err) {
    console.log("error while connectoing to db");
    console.log(err);
  }
});

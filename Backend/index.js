const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

const { connection } = require("./Config/db");
const { Authmodel } = require("./Models/auth.model");
const { dataRouter } = require("./Routes/data.route");

const PORT = process.env.port || 7002;

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

//signup here
// app.post("/Signup", async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;
//   const userPresent = await Authmodel.find({ email });

//   if (userPresent?.email) {
//     res.send("Try loggin in, user is already exist");
//   } else {
//     try {
//       bcrypt.hash(password, 5, async function (err, hash) {
//         const user = new Authmodel({
//           firstName,
//           lastName,
//           email,
//           password: hash,
//         });
//         await user.save();
//         res.send({
//           message: "Sign up successfull",
//           status: "Ok",
//         });
//       });
//     } catch (err) {
//       console.log(err);
//       res.send({
//         ERR: "Something went wrong in signup the data . please try again later",
//       });
//     }
//   }
// });

// //login here

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await Authmodel.find({ email });
//     if (user.length > 0) {
//       const hashed_password = user[0].password;
//       bcrypt.compare(password, hashed_password, function (err, result) {
//         if (result) {
//           const token = jwt.sign({ userID: user[0]._id }, "hush");
//           res.send({ msg: "Login successfull", token: token });
//         } else {
//           res.send("Login failed");
//         }
//       });
//     }
//   } catch {
//     res.send("Something went wrong, please try again later");
//   }
// });

app.use("/leads", dataRouter);

//running port
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
    // console.log(process.env.name);
    console.log(`listening on  ${PORT}`);
  } catch (err) {
    console.log("error while connectoing to db");
    console.log(err);
  }
});

const express = require("express");

const dataRouter = express.Router();

const { HeadPhoneModel } = require("../Models/data.model");
dataRouter.get("/", async (req, res) => {
  try {
    const userData = await HeadPhoneModel.find();
    res.send(userData);
  } catch (err) {
    console.log({ ERR: "Something went wrong in getting the Data" });
  }
});

dataRouter.post("/post", async (req, res) => {
  const payload = req.body;
  try {
    const new_data = new HeadPhoneModel(payload);
    await new_data.save();
    res.send({ MSG: " Data Posted Successfully" });
  } catch (err) {
    console.log({ ERR: "Something went wrong in posting the Data" });
  }
});

dataRouter.delete("/delete/:userID", async (req, res) => {
  const userID = req.params.userID;
  try {
    await HeadPhoneModel.findByIdAndDelete({ _id: userID });
    res.send({ MSG: "User Data Deleted Successfully" });
  } catch (err) {
    console.log({ ERR: "Something went wrong in posting the Data" });
  }
});

module.exports = { dataRouter };

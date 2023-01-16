const { Router } = require("express");
const { HeadPhoneModel } = require("../Models/data.model");
const dataRouter = Router();

//get router
dataRouter.get("/", async (req, res) => {
  try {
    const userData = await HeadPhoneModel.find();
    res.send(userData);
  } catch (err) {
    console.log({ ERR: "Something went wrong in getting the Data" });
  }
});

//post router
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

//delete router
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

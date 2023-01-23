const { Router } = require("express");
const { FormModel } = require("../Models/form.model");
const formRouter = Router();

formRouter.get("/", async (req, res) => {
  try {
    const userData = await FormModel.find();
    res.send(userData);
  } catch (err) {
    console.log({ ERR: "Something went wrong in getting the Data" });
  }
});

//post router
formRouter.post("/post", async (req, res) => {
  const payload = req.body;
  try {
    const new_data = new FormModel(payload);
    await new_data.save();
    res.send({ MSG: " FormData Posted Successfully" });
  } catch (err) {
    console.log({ ERR: "Something went wrong in posting the FormData" });
  }
});

module.exports = { formRouter };

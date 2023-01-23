const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  email: { type: String, required: true },
  country: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  phone: { type: String, required: true },
});

const FormModel = mongoose.model("formData", formSchema);
module.exports = { FormModel };

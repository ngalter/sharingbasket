const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pantrySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
// },{ autoCreate: true, capped: 1024 });

const Pantry = mongoose.model("Pantry", pantrySchema);

module.exports = Pantry;

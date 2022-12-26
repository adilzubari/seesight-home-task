const { model, Schema } = require("mongoose");

const tableSchema = new Schema({
  id: String,
});

module.exports = model("Table", tableSchema);

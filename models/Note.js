const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const NoteSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
},
{ timestamps: true });
module.exports = Note = mongoose.model("notes", NoteSchema);
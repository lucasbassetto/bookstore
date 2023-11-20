import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const albumSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  title: {
    type: mongoose.Schema.Types.String,
    required: [true, "Title is required"]
  },
  genre: {
    type: mongoose.Schema.Types.String,
    required: [true, "Genre is required"]
  },
  recordLabel: {
    type: mongoose.Schema.Types.String,
    required: [true, "Record label is required"]
  },
  author: authorSchema
}, { versionKey: false });


const album = mongoose.model("albums", albumSchema);

export default album;
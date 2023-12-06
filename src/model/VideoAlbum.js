import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const videoAlbumSchema = new mongoose.Schema({
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
  author: authorSchema
}, { versionKey: false });


const videoAlbum = mongoose.model("videoAlbums", videoAlbumSchema);

export default videoAlbum;
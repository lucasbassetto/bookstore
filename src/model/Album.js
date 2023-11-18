import mongoose from "mongoose";

const albumSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: mongoose.Schema.Types.String, required: true },
    genre: { type: mongoose.Schema.Types.String, required: true },
    recordLabel: { type: mongoose.Schema.Types.String, required: true },
}, { versionKey : false });


const album = mongoose.model("albums", albumSchema);

export default album;
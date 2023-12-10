import videoAlbum from "../model/VideoAlbum.js";
import { author } from "../model/Author.js";

class VideoAlbumController {

  static async findAll(req, res) {
    // #swagger.summary = 'Return list of all video albums'
    // #swagger.description = 'Return list of all video albums'
    try {
      const { limit = 5, page = 1 } = req.query;

      const listAll = await videoAlbum.find({})
        .skip((page - 1) * limit)
        .limit(limit);

      res.status(200).json(listAll);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async findById(req, res) {
    // #swagger.summary = 'Return video album by id'
    // #swagger.description = 'Return video album by id'
    try {
      const id = req.params.id;
      const findAlbumById = await videoAlbum.findById(id);
      res.status(200).json(findAlbumById);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async save(req, res) {
    // #swagger.summary = 'Save new video album'
    // #swagger.description = 'Save new video album'
    const newAlbum = req.body;
    try {
      const findAuthorById = await author.findById(newAlbum.author);
      const joinAlbumAndAuthor = { ...newAlbum, author: { ...findAuthorById._doc } }; // spread operator, para pegar os dados de newAlbum e juntar com o author
      const createAlbum = await videoAlbum.create(joinAlbumAndAuthor);
      res.status(201).json({ message: "Video Album successfully added!", album: createAlbum });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req, res) {
    // #swagger.summary = 'Update video album by id'
    // #swagger.description = 'Update video album by id'
    try {
      const id = req.params.id;
      await videoAlbum.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Video Album successfully updated!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    // #swagger.summary = 'Delete video album by id'
    // #swagger.description = 'Delete video album by id'
    try {
      const id = req.params.id;
      await videoAlbum.findByIdAndDelete(id);
      res.status(200).json({ message: "Video Album successfully deleted!" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async findAlbumByFilter(req, res) {
    // #swagger.summary = 'Return video album by filter'
    // #swagger.description = 'Return video album by filter. You can filter by title, genre and author'
    try {
      const { limit = 5, page = 1 } = req.query;
      const search = await processSearch(req.query);

      const albumResult = await videoAlbum
        .find(search)
        .populate("author")
        .skip((page - 1) * limit)
        .limit(limit);

      res.status(200).json(albumResult);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

async function processSearch(params) {
  const { title, genre, author } = params;

  const search = {};

  if (title) search.title = params.title;
  if (genre) search.genre = params.genre;

  if (author) {
    const author = await author.findOne({ name: author });

    search.author = author._id;
  }

  return search;
}

export default VideoAlbumController;
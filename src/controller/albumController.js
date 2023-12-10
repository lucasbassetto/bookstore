import album from "../model/Album.js";
import { author } from "../model/Author.js";

class AlbumController {

  static async findAll(req, res) {
    // #swagger.summary = 'Return list of all albums'
    // #swagger.description = 'List of all albums'
    try {
      const { limit = 5, page = 1 } = req.query;

      const listAll = await album.find({})
        .skip((page - 1) * limit)
        .limit(limit);

      res.status(200).json(listAll);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async findById(req, res) {
    // #swagger.summary = 'Return album by id'
    // #swagger.description = 'Return album by id'
    try {
      const id = req.params.id;
      const findAlbumById = await album.findById(id);
      res.status(200).json(findAlbumById);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async save(req, res) {
    // #swagger.summary = 'Save new album'
    // #swagger.description = 'Save new album'
    const newAlbum = req.body;
    try {
      const findAuthorById = await author.findById(newAlbum.author);
      const joinAlbumAndAuthor = { ...newAlbum, author: { ...findAuthorById._doc } };
      const createAlbum = await album.create(joinAlbumAndAuthor);
      res.status(201).json({ message: "Album successfully added!", album: createAlbum });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req, res) {
    // #swagger.summary = 'Update album by id'
    // #swagger.description = 'Update album by id'
    try {
      const id = req.params.id;
      await album.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Album successfully updated!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    // #swagger.summary = 'Delete album by id'
    // #swagger.description = 'Delete album by id'
    try {
      const id = req.params.id;
      await album.findByIdAndDelete(id);
      res.status(200).json({ message: "Album successfully deleted!" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async findAlbumByFilter(req, res) {
    // #swagger.summary = 'Return album by filter'
    // #swagger.description = 'Return album by filter. You can filter by title, genre and author'
    try {
      const { limit = 5, page = 1 } = req.query;
      const search = await processSearch(req.query);

      const albumResult = await album
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

export default AlbumController;
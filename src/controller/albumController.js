import album from "../model/Album.js";
import { author } from "../model/Author.js";

class AlbumController {

  static async findAll(req, res) {
    try {
      const listAll = await album.find({});
      res.status(200).json(listAll);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async findById(req, res) {
    try {
      const id = req.params.id;
      const findAlbumById = await album.findById(id);
      res.status(200).json(findAlbumById);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async save(req, res) {
    const newAlbum = req.body;
    try {
      const findAuthorById = await author.findById(newAlbum.author);
      const joinAlbumAndAuthor = { ...newAlbum, author: { ...findAuthorById._doc } }; // spread operator, para pegar os dados de newAlbum e juntar com o author
      const createAlbum = await album.create(joinAlbumAndAuthor);
      res.status(201).json({ message: "Album successfully added!", album: createAlbum });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const id = req.params.id;
      await album.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Album successfully updated!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;
      await album.findByIdAndDelete(id);
      res.status(200).json({ message: "Album successfully deleted!" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async findAlbumByFilter(req, res) {
    try {
      const search = processSearch(req.query);

      const albumResult = await album.find(search);

      res.status(200).json(albumResult);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }


  //   static async findAlbumByGenre(req, res) {
  //   const genre = req.query.genre;
  //   try {
  //     const findAlbumByGenre = await album.find({ genre: genre });
  //     res.status(200).json(findAlbumByGenre);
  //   } catch (error) {
  //     res.status(500).json({ message: "Internal Server Error" });
  //   }
  // }

  //   static async findAlbumByAuthorAndTitle(req, res) {
  //   try {
  //     const { author, title } = req.query;
  //     const search = {};

  //     if (author) search.author = author;
  //     if (title) search.title = title;

  //     const findAlbumByAuthorAndTitle = await album.find(search);
  //     res.status(200).json(findAlbumByAuthorAndTitle);
  //   } catch (error) {
  //     res.status(500).json({ message: "Internal Server Error" });
  //   }
  // }

}

function processSearch(params) {
  const { author, title, genre } = params;

  const search = {};

  if (author) search.author = params.author;
  if (title) search.title = params.title;
  if (genre) search.genre = params.genre;

  return search;
}

export default AlbumController;
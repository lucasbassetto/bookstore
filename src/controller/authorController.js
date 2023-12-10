import { author } from "../model/Author.js";

class AuthorController {

  static findAll = async (req, res) => {
    // #swagger.summary = 'Return list of all authors'
    // #swagger.description = 'List of all authors'
    try {
      const { limit = 5, page = 1 } = req.query;

      const listAll = await author.find({})
        .skip((page - 1) * limit)
        .limit(limit);

      res.status(200).json(listAll);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static async findById(req, res) {
    // #swagger.summary = 'Return author by id'
    // #swagger.description = 'Return author by id'
    try {
      const id = req.params.id;
      const findAuthorById = await author.findById(id);
      res.status(200).json(findAuthorById);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async save(req, res) {
    // #swagger.summary = 'Save new author'
    // #swagger.description = 'Save new author'
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({ message: "author successfully added!", author: newAuthor });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req, res) {
    // #swagger.summary = 'Update author by id'
    // #swagger.description = 'Update author by id'
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "author successfully updated!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    // #swagger.summary = 'Delete author by id'
    // #swagger.description = 'Delete author by id'
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "author successfully deleted!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default AuthorController;


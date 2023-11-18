import { author } from "../model/Author.js";

class AuthorController {

    static async findAll(req, res) {
        try {
            const listAll = await author.find({});
            res.status(200).json(listAll);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async findById(req, res) {
        try {
            const id = req.params.id;
            const findAuthorById = await author.findById(id);
            res.status(200).json(findAuthorById);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async save(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "author successfully added!", author: newAuthor });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "author successfully updated!" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({ message: "author successfully deleted!" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export default AuthorController;


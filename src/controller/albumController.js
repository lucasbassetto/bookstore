import album from "../model/Album.js";

class AlbumController {

    static async findAll(req, res) {
        try {
            const listAll = await album.find({});
            res.status(200).json(listAll);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async findById(req, res) {
        try {
            const id = req.params.id;
            const findAlbumById = await album.findById(id);
            res.status(200).json(findAlbumById);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async save(req, res) {
        try {
            const newAlbum = await album.create(req.body);
            res.status(201).json({ message: "Album successfully added!", album: newAlbum });
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
            res.status(500).json({ message: error.message });
        }
    }
};

export default AlbumController;


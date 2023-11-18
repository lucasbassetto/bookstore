import album from "../model/Album.js";

class AlbumController {

    static async findAll(req, res) {
        const listAll = await album.find({});
        res.status(200).json(listAll);
    }

    static async findById(req, res) {
        const index = findAlbum(req.params.id);
        res.status(200).json(albums[index]);
    }

    static async save(req, res) {
        const newAlbum = new album.create(req.body);
        res.status(201).json({ message: "Album successfully added!", album: newAlbum });
    }
}

export default AlbumController;


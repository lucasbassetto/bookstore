import album from "../model/Album.js";
import { author } from "../model/Author.js";
import videoAlbum from "../model/VideoAlbum.js";

class InstallController {

  static async install(req, res) {
    // #swagger.summary = 'Install'
    // #swagger.description = 'Install'
    try {
      const authors = await author.create([
        { id: 1, name: "Pink Floyd" },
        { id: 2, name: "Kiss" },
        { id: 3, name: "Red Hot Chili Peppers" },
        { id: 4, name: "The Weeknd" },
        { id: 5, name: "Chris Brown" },
      ]);

      const albums = await album.create([
        { id: 1, title: "The Wall", genre: "Rock", recordLabel: "Harvest Records", authorId: 1 },
        { id: 2, title: "Destroyer", genre: "Rock", recordLabel: "Casablanca Records", authorId: 2 },
        { id: 3, title: "Californication", genre: "Rock", recordLabel: "Warner Bros. Records", authorId: 3 },
        { id: 4, title: "After Hours", genre: "R&B", recordLabel: "Republic Records", authorId: 4 },
        { id: 5, title: "Indigo", genre: "R&B", recordLabel: "RCA Records", authorId: 5 },
      ]);

      const videoAlbum = await videoAlbum.create([
        { id: 1, title: "Pink Floyd: Live at Pompeii", genre: "Rock", authorId: 1 },
        { id: 2, title: "Alive!", genre: "Rock", authorId: 2 },
        { id: 3, title: "Live at Slane Castle", genre: "Rock", authorId: 3 },
        { id: 4, title: "The Weeknd: Live at SoFi Stadium", genre: "R&B", authorId: 4 },
        { id: 5, title: "Live at Rolling Loud 2021", genre: "R&B", authorId: 5 },
      ]);
      res.status(200).json({ message: "Sucess", authors, albums, videoAlbum });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
export default InstallController;
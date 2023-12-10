import album from "../model/Album.js";
import { author } from "../model/Author.js";
import VideoAlbum from "../model/VideoAlbum.js";

class InstallController {

  static async install(req, res) {
    // #swagger.summary = 'Install'
    // #swagger.description = 'Install'
    try {
      const authors = await author.create([
        { name: "Pink Floyd" },
        { name: "Kiss" },
        { name: "Red Hot Chili Peppers" },
        { name: "The Weeknd" },
        { name: "Chris Brown" },
      ]);

      const albums = await album.create([
        { title: "The Wall", genre: "Rock", recordLabel: "Harvest Records", author: authors[0] },
        { title: "Destroyer", genre: "Rock", recordLabel: "Casablanca Records", author: authors[1] },
        { title: "Californication", genre: "Rock", recordLabel: "Warner Bros. Records", author: authors[2] },
        { title: "After Hours", genre: "R&B", recordLabel: "Republic Records", author: authors[3] },
        { title: "Indigo", genre: "R&B", recordLabel: "RCA Records", author: authors[4] },
      ]);

      const videos = await VideoAlbum.create([
        { title: "Pink Floyd: Live at Pompeii", genre: "Rock", author: authors[0] },
        { title: "Alive!", genre: "Rock", author: authors[1] },
        { title: "Live at Slane Castle", genre: "Rock", author: authors[2]},
        { title: "The Weeknd: Live at SoFi Stadium", genre: "R&B", author: authors[3] },
        { title: "Live at Rolling Loud 2021", genre: "R&B", author: authors[4]},
      ]);
      res.status(200).json({ message: "Sucess", authors, albums, videos });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
export default InstallController;
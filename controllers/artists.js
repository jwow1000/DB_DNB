import Artist from "../models/Artist.js";

// get all the artists
export const getArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// get artist by id
export const getArtist = async (req, res) => {
  try {
    const { id } = req.params;
    
    const  martist = await Artist.findOne({"id": id});
    
    if (artist) {
      return res.json(artist);
    }

    res.status(404).json({ message: `Artist not found! ${id}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// get artist by name
export const getArtistByName = async (req, res) => {
    try {
      const { name } = req.params;
      const artist = await Artist.findOne({"name": name});
  
      if (artist) {
        return res.json(artist);
      }
  
      res.status(404).json({ message: "Artist not found!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

// create a new Artist
export const createArtist = async (req, res) => {
  try {
    const artist = new Artist(req.body);
    await artist.save();

    res.status(201).json(artist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// update an existing Artist by ID
export const updateArtist = async (req, res) => {
  try {
    const { id } = req.params

    const Artist = await Artist.findOneAndUpdate({"name": id}, req.body)

    res.status(201).json(Artist)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

// delete artist by ID
export const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params

    const deleted = await Artist.findByIdAndDelete(id)

    if (deleted) {
      return res.status(200).send("Artist Deleted")
    }

    throw new Error("Artist not found.")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

// import models
import Artist from '../models/Artist.js';
import Release from '../models/Release.js';
import Label from '../models/Label.js';
import axios from 'axios';
//

const base = "https://api.discogs.com";

// fetch call for search, reuturn json object
const fetchReleases = async () => {
    const response = await axios.get(
        // get 20 releases from metalheadz
      `${base}/labels/128/releases?page=3&per_page=20&sort=year&sort_order=asc`,
      {
        headers: {
            'User-Agent': `reSearchDiscogs/1.0 +https://github.com/jwow1000/SoundProject_api`
        }
      }
    );

    // set search results with the data
    console.log(response.data);
};

fetchReleases();

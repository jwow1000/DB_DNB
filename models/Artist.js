import mongoose from 'mongoose';

const artistsSchema = new mongoose.Schema({
    "name": [String],
    "id": {type: Number},
    "uri": {type: String},
    "real_name": {type: String},
    "profile": {type: String},
    "releases": [Number],
    "videos_url": [String]

});

export default mongoose.model('artists', artistsSchema);

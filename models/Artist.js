import mongoose from 'mongoose';

const artistsSchema = new mongoose.Schema({
    "name": {type: String},
    "id": {type: Number},
    "uri": {type: String},
    "real_name": {type: String},
    "profile": {type: String},
    "releases": [Number]

});

export default mongoose.model('artists', artistsSchema);

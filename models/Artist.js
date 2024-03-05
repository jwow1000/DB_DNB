import mongoose from 'mongoose';

const artistsSchema = new mongoose.Schema({
    "name": {type: String},
    "uri": {type: String},
    "real_name": {type: String},
    "profile": {type: String},
    "releases": { type: Schema.Types.ObjectId, ref: "releases" }

});

export default mongoose.model('artists', artistsSchema);

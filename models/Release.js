import mongoose from 'mongoose';

const releasesSchema = new mongoose.Schema({
    "name": {type: String},
    "year": {type: String},
    "title": {type: String},
    "label": { type: Schema.Types.ObjectId, ref: "labels" },
    "artists": { type: Schema.Types.ObjectId, ref: "artists" },
    "songs": {type: Schema.Types.ObjectId, ref: "songs"},
    "uri": {type: String}
    
});

export default mongoose.model('releases', releasesSchema);

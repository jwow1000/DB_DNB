import mongoose from 'mongoose';

const releasesSchema = new mongoose.Schema({
    "title": {type: String},
    "id": {type: Number},
    "year": {type: String},
    "format": {type: String},
    "resource_url": {type: String},
    "catno": {type: String},
    "title": {type: String},
    "label": [String],
    "artists": [Number],
    "uri": {type: String}
    
});

export default mongoose.model('releases', releasesSchema);

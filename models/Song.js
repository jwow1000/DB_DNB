import mongoose from 'mongoose';

const songsSchema = new mongoose.Schema({
    "title": {type: String},
    "duration": {type: String},
    "releases": { type: Schema.Types.ObjectId, ref: "releases" },
    
    
});

export default mongoose.model('songs', songsSchema);

import mongoose from 'mongoose';

const labelsSchema = new mongoose.Schema({
    "name": {type: String},
    "uri": {type: String},
    "releases": { type: Schema.Types.ObjectId, ref: "releases" },
    "profile": {type: String}

    
});

export default mongoose.model('labels', labelsSchema);

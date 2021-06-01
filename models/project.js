const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProjectSchema = new Schema ({
    title: String,
    Image: String,
    description: String,
    Location: String,
});


module.exports = mongoose.model('Project', ProjectSchema)
var moongoose = require("mongoose");
var Schema = mongoose.Schema;

var contentSchema = new Schema({
    nameFilm: String,
    styleFilm: String,
    month: String,
    year: Number,
    contentDescription: String
});

var Films = mongoose.model("Films",contentSchema);

module.exports = Films;
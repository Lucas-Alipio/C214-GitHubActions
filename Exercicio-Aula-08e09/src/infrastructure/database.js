const mongoose = require('mongoose');

//Add your connection string into your application code
const uri = `mongodb+srv://{}:{}@cluster0.z6flp.mongodb.net/myFirstDatabase?`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const MusicSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type:String,
        unique: true,
    },
    visualizacoes: Number,
    author: String,
});

const MusicModel = mongoose.model('MusicModel', MusicSchema);

module.exports = {
    MusicModel,
};

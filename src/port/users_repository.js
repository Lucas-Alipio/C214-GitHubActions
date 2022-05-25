const { MusicModel } = require('../infrastructure/database');

const UsersRepository = {
    async create(data) {
        try {
            const model = new SuperModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                nome: data.nome,
                visualizacoes: data.visualizacoes,
                author: data.author,
            };
            const options = { new: true };
            const filter = { nome: data.nome };
            const result = await MusicModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await MusicModel.deleteOne({ nome: data.nome }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const result = await MusicModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },
};

module.exports = UsersRepository;
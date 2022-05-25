const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/constants');
const UsersRepository = require('../port/users_repository');
const Constraints = require('../utils/users_validation');
const Validation = require('../utils/validation');

const Users = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.id = Utils.generateUuid();

            const response = await UsersRepository.create(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const validation = Validation.update(data);
            if (validation) {
                return validation;
            }

            const response = await UsersRepository.update(data);

            if (response === []) {
                const result = Constants.ErrorNotFound;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async delete(data) {
        try {
            const validation = Validation.delete(data);
            if (validation) {
                return validation;
            }

            const response = await UsersRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await UsersRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Users;
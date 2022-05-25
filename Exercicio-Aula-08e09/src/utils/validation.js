const validate = require('validate.js');
const { update } = require('../port/users_repository');
const Constants = require('./constants');
const Constraints = require('./users_validation');

const Validation = {
    create(data){
        const validation = validate.validate(data, Constraints.create);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }
            
            return validation;
    },

    update(data){
        const validation = validate.validate(data, Constraints.update);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            return validation;
    },

    delete(data){
        const validation = validate.validate(data, Constraints.deleteBy);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            return validation;
    }
};

module.exports = Validation;
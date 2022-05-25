const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    visualizacoes: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
    author: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    visualizacoes: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
    author: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};
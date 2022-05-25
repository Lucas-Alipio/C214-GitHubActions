const Users = require('../src/application/users_services');
const Constants = require('../src/utils/Constants');
const Utils = require('../src/utils/utils');
const UsersRepository = require('../src/port/users_repository');

jest.mock('../src/port/users_repository');

test('CREATE - Dado válido', async () => {
    const data = {
        nome: "musica01",
        visualizacoes: 1000,
        author: "XXX"
    }

    const id = Utils.generateUuid();

    UsersRepository.create.mockResolvedValue({ ...data, id });

    const result = await Users.create(data);
    expect(result).toEqual({ ...data, id });
})

test('CREATE - Dado duplicado', async () => {
    const data = {
        nome: "musica01",
        visualizacoes: 1000,
        author: "XXX"
    }

    const id = Utils.generateUuid();

    UsersRepository.create.mockResolvedValue({ code: 11000 });

    const result = await Users.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})

test('UPDATE - Dado válido', async () => {
    const data = {
        nome: "musica01",
        visualizacoes: 1005,
        author: "YYY"
    }


    UsersRepository.update.mockResolvedValue({ ...data});

    const result = await Users.update(data);
    expect(result).toEqual({ ...data});
})

test('DELETE - Dado válido', async () => {
    const data = {
        nome: "musica01",
        visualizacoes: 1005,
        author: "YYY"

    }

    UsersRepository.delete.mockResolvedValue({ ...data});

    const result = await Users.update(data);
    expect(result).toEqual({ ...data});
})
const aluno = require('../models/aluno');
const repository = {
    getAll: async () => await aluno.findAll(),

    create: async ({
        rga,
        situacao,
        curso,
        nome,
    }) => {
        try {
            const newUser = await aluno.create({
                rga: rga,
                situacao: situacao,
                curso: curso,
                nome: nome,
            });
            return newUser;
        } catch (e) {
            console.log("Erro no create Repository", e);
        }
    },
    findById: async (id) => await aluno.findByPk(id),
    delete: async (id) => {
        try {
            const destroy = await aluno.destroy({
                where: {
                    id,
                },
            });

            return !!destroy;
        } catch (e) {
            return false;
        }
    },
    update: async (id, { rga, situacao, curso, nome }) => {
        try {
            const update = await aluno.update(
                {
                    rga,
                    situacao,
                    curso,
                    nome,
                },
                {
                    where: {
                        id,
                    },
                }
            );

            return !!update[0];
        } catch (e) {
            console.log("Erro no update repository", e);
            return false;
        }
    },
}
module.exports = repository;
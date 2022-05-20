const aluno = require('../models/aluno');
const repository = {
    getAll: async () => await user.findAll(),

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
}
module.exports = repository;
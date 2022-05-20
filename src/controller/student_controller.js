const studentRepostory = require('../repository/student_repository');

const resources = {
    getAll: async (req, res) => {
        try {
            const students = await studentRepostory.getAll();

            if (!students) {
                throw new Error("Não foi possível pegar os usuários");
            }

            res.send({ students });
        } catch (e) {
            console.log();
            res.status(400).send({ e });
        }
    },
    create: async (req, res) => {
        try {
            const newStudent = await studentRepostory.create(req.body);
            res.send({ newStudent });
        } catch (e) {
            console.log(e);
            res.status(400).send({ e, message: "Erro no create" });
        }
    },
}
module.exports = resources;
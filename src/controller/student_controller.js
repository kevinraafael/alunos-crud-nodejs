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
    delete: async (req, res) => {
        try {
            const { id } = req.params;

            const hasUser = await studentRepostory.findById(id);

            if (!hasUser) {
                throw new Error("Não existe esse usuário.");
            }

            const userDelete = await studentRepostory.delete(id);

            if (!userDelete) {
                throw new Error("Erro apagar.");
            }

            res.send({ message: "apagado com sucesso" });
            return true;
        } catch (e) {
            res
                .status(400)
                .send({ e: e.message, message: "Houve um erro no delete" });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;

        try {
            const hasUser = await studentRepostory.findById(id);

            if (!hasUser) {
                throw new Error("Não existe esse usuário.");
            }

            const userUpdated = await studentRepostory.update(id, req.body);

            if (!userUpdated) {
                throw new Error("Erro atualizar.");
            }

            res.send();
        } catch (e) {
            console.log(e);
            res.status(405).send({ e: e.message, message: "Erro no update" });
            return false;
        }
    },
    inexistingRouterPutOrDelete: async (req, res) => {
        try {
            const hasUser = await studentRepostory.findById(id);
            const userUpdated = await studentRepostory.update(id, req.body);
        } catch (e) {
            res.status(405).send({ e: e.message, message: "Endpoint Inexistente , caso queira deletar ou atualizar um usuário usar o seguinte exemplo alunos/id." });

        }

    },
    inexistingRouterPost: async (req, res) => {
        try {
            const hasUser = await studentRepostory.findById(id);
            const userUpdated = await studentRepostory.update(id, req.body);
        } catch (e) {
            res.status(405).send({ e: e.message, message: "Endpoint Inexistente , caso queira criar um usuário usar o seguinte exemplo POST alunos." });

        }

    },
    getOneStudent: async (req, res) => {
        const { id } = req.params;

        try {
            const student = await studentRepostory.findById(id);

            if (!student) {
                throw new Error("Esse usuário não existe.");
            }

            const studentFinded = await studentRepostory.getOne(id);

            /*  if (!studentFinded) {
                 throw new Error("Erro ao encontrar.");
             } */

            res.send({ studentFinded });
        } catch (e) {
            console.log(e);
            res.status(404).send({ e: e.message });
            return false;
        }
    }
}
module.exports = resources;
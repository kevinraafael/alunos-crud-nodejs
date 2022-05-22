const router = require("express").Router();
const validation = require("../validations/studentValidation");
const intercept = require("../validations/intercept");

const studentController = require('../controller/student_controller');

router.get("/alunos", studentController.getAll);
router.get("/alunos/:id", studentController.getOneStudent);
router.post("/alunos", validation.create(), intercept, studentController.create);

router.delete(
    "/alunos/:id",
    studentController.delete
);
router.put("/alunos/:id", studentController.update);

router.put("/alunos", intercept, studentController.inexistingRouterPutOrDelete);
router.delete("/alunos", intercept, studentController.inexistingRouterPutOrDelete);
router.post("/alunos/:id", intercept, studentController.inexistingRouterPost);
module.exports = router;
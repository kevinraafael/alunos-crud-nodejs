const router = require("express").Router();

const studentController = require('../controller/student_controller');

router.get("/students", studentController.getAll);
router.post("/students", studentController.create);

router.delete(
    "/students/:id",
    studentController.delete
);
router.put("/students/:id", studentController.update);
module.exports = router;
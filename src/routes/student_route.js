const router = require("express").Router();

const studentController = require('../controller/student_controller');

router.get("/students", studentController.getAll);
router.post("/students", studentController.create);

module.exports = router;
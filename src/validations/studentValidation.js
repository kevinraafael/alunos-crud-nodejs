const { body, param } = require("express-validator");

const validation = {
    create: () => {
        return [
            body("rga").notEmpty(),
            body("nome").notEmpty(),
        ];
    },

    delete: () => {
        return [param("id").notEmpty(), param("id").isLength({ min: 1 })];
    },

};

module.exports = validation;

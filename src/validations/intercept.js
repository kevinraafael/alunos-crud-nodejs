const { validationResult } = require("express-validator");


const intercept = (req, res, next) => {
    const { errors } = validationResult(req);

    if (errors.length) {
        return res.status(405).send(errors);
    }
    next();
};

/*const interceptId = (req, res, next) => {
  const verifyNumberId = req.params(id).length();
  if (verifyNumberId <= 0) {
    console.log({ message: "ID invalido" });
    return res.status(400);
  }
  next();
};*/
module.exports = intercept;

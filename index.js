//index.js
const express = require("express");

const app = express();


app.use(express.json());
app.use("/", require("./src/routes/student_route"));

app.listen(3000);
//Função que realiza a conexão com o banco de dados
(async () => {
    const database = require('./src/database/db');
    const Aluno = require('./src/models/aluno');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();

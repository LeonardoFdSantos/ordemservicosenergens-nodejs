const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

const db = require("./app/models");
db.sequelize.sync()
// db.sequelize.sync({force: true}).then(() => {console.log("Drop and re-sync db.");});

app.get("/", (req, res)=> {
    res.json({message: "Welcome to Energens Aplication."});
});

require("./app/routes/clientes.routes")(app);
require("./app/routes/dadosConcessionarias.routes")(app);
require("./app/routes/analiseTecnica.routes")(app);
require("./app/routes/analiseComercial.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}.`);
});
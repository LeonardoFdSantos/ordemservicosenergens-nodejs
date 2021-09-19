const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    //"http://localhost:8081"
    origin: "*"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

const db = require("./app/models");
db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and re-sync db.");
});

app.get("/", (req, res)=> {
    res.json({message: "Welcome to Energens Aplication."});
});

require("./app/routes/clientes.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}.`);
});
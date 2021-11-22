const express = require("express");

const app = express();

const port = 8000;

app.use(express.json());


const database = require("./models");
database.sequelizeDatabase.sync();
// database.sequelizeDatabase.sync({force:true}).then(()=> {
//     console.log("Drop and re-sync db.")
// });


const router = require("./routes/artigos.routes");
router(app);

app.listen(port,function(){
console.log("ouvindo a porta:", port);

});
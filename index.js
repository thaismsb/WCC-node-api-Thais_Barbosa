const express = require("express");

const app = express();

const port = 8080;

app.use(express.json());

app.get("/", function(req,response){
    response.send("Dasa Educa - Artigos");
});
// app.post("/:id", function(request,response){
//     console.log(request.body, request.params.id);
//     response.send("Dasa Educa - Post");
// });
// app.put("/", function(request,response){
//     response.send("Dasa Educa - Put");
// });
// app.delete("/:id", function(request,response){
//     response.send("Dasa Educa - Delete");
// });
// app.get("/segunda-req", function(req,res){
//     res.send("Minha SEGUNDA requisição")
// });
// app.get("/com-parametros", function(req,res){
//     if(req.query.nome === "Thaís"){
//         res.send("Thaís chamou uma requisição!")
//     }
//     res.send("Com parâmetros funciona! Sabadou " +  req.query.nome + " " + req.query.sobrenome);
// });

// app.post("/meu-primeiro-post",function(req,res){
// res.send("Meu post funciona");
// });

// app.put("/meu-primeiro-put/:id",function(req,res){
//     console.log(req.body, req.params.id)
// res.send("Meu put funciona");
// });

// app.delete("/meu-primeiro-delete/:id",function(req,res){
//     console.log(req.params.id);
//     res.send("Meu delete funciona " + req.params.id);
// })
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
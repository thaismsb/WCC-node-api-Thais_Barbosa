//rotas do sistema de artigos


   module.exports = (app) =>{
      const artigosController = require ("../controllers/artigos.controller");
      let router = require("express").Router();

      router.post("/", artigosController.create);
      router.get("/", artigosController.findAll);
      router.get("/findByTitle/", artigosController.findByTitle);
      router.get("/findById/", artigosController.findById);
      router.get("/published", artigosController.findAllPublished);
      router.put("/:id", artigosController.update);
      router.put("/", artigosController.updateMany);
      router.delete("/", artigosController.deleteAll);
      router.delete("/:id", artigosController.delete);
    
      app.use("/artigos", router);
   }

























//rotas do sistema de artigos


   module.exports = (app) =>{
      const artigosController = require ("../controllers/artigos.controller");
      let router = require("express").Router();

      router.post("/", artigosController.create);
      router.get("/", artigosController.findAll);
      app.use("/artigos", router);
   }






















/*
   GET

   - Obter todos os artigos
   - Obter um artigo específico
   - Obter todos os artigos publicados

   POST

   - Criar um novo artigo

   PUT

   - Publicar meu artigo

   DELETE

   - Deletar um artigo

   */


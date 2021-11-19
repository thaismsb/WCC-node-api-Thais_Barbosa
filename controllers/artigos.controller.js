// regras de negócio do sistema de artigos

const database = require("../models");
const tabelaArtigos = database.artigos;

exports.create =(request, response)=>{
    const artigo = {
        titulo: request.body.titulo,
        descricao: request.body.descricao,
        publicado: request.body.publicado
        
    };

    tabelaArtigos.create(artigo)
    .then(()=> response.send("Artigo criado com sucesso"))
    .catch((error) => {
        console.log(error);
        response.status(500).send("Ocorreu um erro ao salvar o artigo")
    })
};
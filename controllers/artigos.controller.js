// regras de negócio do sistema de artigos

const { artigos } = require("../models");
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


exports.findAll =(request, response)=>{
    const artigos = tabelaArtigos.findAll().then(function(data) {
	response.send(data)
})
.catch(function (){
	response.status(500).send("Ocorreu um erro obtendo os artigos")
});
};


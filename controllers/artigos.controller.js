// regras de negócio do sistema de artigos

const { artigos } = require("../models");
const database = require("../models");
const tabelaArtigos = database.artigos;

exports.create =(request, response)=>{
    const {titulo, descricao, publicado} = request.body;
    const artigo = {
        titulo, //titulo:titulo
        descricao,
        publicado
    };

    if(!titulo){
        response
        .status(400)
        .send("O artigo precisa conter ao menos o título definido.")
    }

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

exports.findById =(request, response)=>{
const{id:idArtigo}= request.query;
tabelaArtigos
.findByPk(idArtigo)
.then(function(data){
    if(data){
        response.send(data);
    }else{
        response.status(404).send({
            message:
               "Não foi possível encontrar um artigo com id:" +
                idArtigo,
        })
    }
})
.catch(function(){
response.status(500).send({
    message:
    "Ocorreu um erro ao buscar o artigo com o id:" + idArtigo,
})
})
     
};

exports.findByTitle =(request, response)=>{
    const {titulo: tituloArtigo} = request.query;
    tabelaArtigos
    .findOne({where:{titulo: tituloArtigo}})
    .then(function(data){
        if(data){
            response.send(data);
        }else{
            return response.status(404).send({
                message:
                'Não foi possível encontrar um artigo com titulo:' +
                tituloArtigo,
            })
        }
})
.catch(function(){
response.status(500).send({
    message:
    'Ocorreu um erro na obtenção do artigo.'

})
})
};







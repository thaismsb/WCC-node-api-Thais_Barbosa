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

exports.findAllPublished =(request, response) =>{
    tabelaArtigos
    .findAll({where: { publicado: true }})
    .then(function(data){
        response.send(data);
    })
    .catch(function(error){
        response.status(500).send("Não foi possível buscar os arquivos publicados.")
    });
};

exports.update=(request, response) =>{
    const{ body: updates} = request;
    const{ id: idArtigo} = request.params;
    const query = {where: {id: idArtigo}, returning: true};

    tabelaArtigos
    .update(updates, query)
    .then(function(data){
      
      const linhasAtualizadas = data[0];
      if (linhasAtualizadas === 0) {
        response
          .status(404).send("Não foi encontrado nenhum registro para ser atualizado a partir do id: " + idArtigo);
      } else {
        const artigosAtualizados = data[1];
        response.send(artigosAtualizados);
      }
    })
    .catch(function(error){
        response.status(500).send("Ocorreu um erro ao atualizar o arquivo.")
    });
};

exports.updateMany = (request, response) => {
  const { body: updates } = request;
  const { id: idArtigo } = request.params;
  const query = {
    returning: true,
    where: { descricao: "descrição do artigo" },
  };

  tabelaArtigos
    .update(updates, query)
    .then(function (data) {
      console.log(data);
      const linhasAtualizadas = data[0];
      if (linhasAtualizadas === 0) {
        response
          .status(404)
          .send("Não foi encontrado nenhum registro para ser atualizado");
      } else {
        const artigosAtualizados = data[1];
        response.send(artigosAtualizados);
      }
    })
    .catch(function (error) {
      response.status(500).send("Ocorreu um erro ao atualizar os artigos");
    });
};

exports.deleteAll =(request, response) =>{
    tabelaArtigos
    .destroy({where: {}, truncate: false})
    .then(function(itemsDeletados){
        response.send("Foram deletados " + itemsDeletados + " artigos.");
    })
    .catch(function(error){
        response.status(500).send("Ocorreu um erro ao deletar os artigos.")
    });
};
//ver
exports.delete =(request, response) =>{
    const {id: idArtigo} = request.params;
    tabelaArtigos
    .destroy({where: { id: idArtigo}})
    .then(function(itemsDeletados){
        if(itemsDeletados === 0){
    response.send("O item com ID " + idArtigo + " não foi encontrado.");
        } else {
    response.send("Artigo " + idArtigo + " deletado com sucesso.");
        }
    })
    .catch(function(error){
        response.status(500).send("Ocorreu um erro ao deletar o artigo " + idArtigo)
    });
};






// configuração do banco de dados

const dotenv = require("dotenv");

dotenv.config();

module.exports ={
    connsctionStrinUrl: process.env.DB_CONNECTION_STRING_URL,
    dialect:"postgres"
}
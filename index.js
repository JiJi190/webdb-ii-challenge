const express = require("express");

const server = express();

const port = process.env.port || 8000

const knex = require('knex')

const knexConfig = require("./knexfile")

const db = knex(knexConfig.development)

server.get("/", (req, res) => {
   
})


server.use(express.json())

server.listen(port, () => console.log(`Running on ${port}`))

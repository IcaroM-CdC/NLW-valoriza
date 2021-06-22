import express from "express"
import reflect_metadata from "reflect-metadata"
import "./database"

const APP = express()
const PORT = 3003

APP.get("/", (request, response) => {

})



APP.listen(PORT, () => {

    console.log(`servidor rodando na URL http://localhost:${PORT}`)

})
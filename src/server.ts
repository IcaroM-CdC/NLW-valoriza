
/* TODO obter o ID do user_sender do compliment através do payload do token */ 
/* TODO criar rota admin para utilizar o painel administrador */

import express from "express"
import { CreateUserController } from "./controllers/createUserController"
import { CreateTagController } from "./controllers/createTagController"
import { CreateAuthController } from "./controllers/createAuthController"
import { CreateComplimentController } from "./controllers/createComplimentController"
import { ListSendComplimentController, ListReceivedComplimentController } from "./controllers/listComplimentsController"
import { ListTagsController } from "./controllers/listTagsController"
import { ListUsersController } from "./controllers/listUsersController"

import { ensureAdmin } from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"
import { errorHandler } from "./middlewares/errorHandler"

import "reflect-metadata"
import "express-async-errors"
import "./database"

const APP = express()
const PORT = 3003

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const createComplimentController = new CreateComplimentController()
const createAuthController = new CreateAuthController()
const listReceivedComplimentController = new ListReceivedComplimentController()
const listSendComplimentController = new ListSendComplimentController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

APP.use(express.json())

APP.post("/login", createAuthController.handle)
APP.post("/register", createUserController.handle)
APP.post("/register-tag", ensureAuthenticated, ensureAdmin, createTagController.handle)
APP.post("/send-compliment", ensureAuthenticated, createComplimentController.handle)

APP.get("/received-compliments", ensureAuthenticated, listReceivedComplimentController.handle)
APP.get("/sended-compliments", ensureAuthenticated, listSendComplimentController.handle)
APP.get("/tags", listTagsController.handle)
APP.get("/admin/users", ensureAuthenticated, ensureAdmin, listUsersController.handle)


APP.use(errorHandler)

APP.listen(PORT, () => {

    console.log(`servidor rodando na URL http://localhost:${PORT}`)

})
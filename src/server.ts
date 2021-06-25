import express, { Request, Response, NextFunction } from "express"
import { CreateUserController } from "./controllers/createUserController"
import { CreateTagController } from "./controllers/createTagController"
import { CreateAuthController } from "./controllers/createAuthController"
import { CreateComplimentController } from "./controllers/createComplimentController"

import { ensureAdmin } from "./middlewares/ensureAdmin"
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

APP.use(express.json())

APP.post("/login", createAuthController.handle)
APP.post("/register", createUserController.handle)
APP.post("/register-tag", ensureAdmin, createTagController.handle)
APP.post("/send-compliment", createComplimentController.handle)


APP.use(errorHandler)

APP.listen(PORT, () => {

    console.log(`servidor rodando na URL http://localhost:${PORT}`)

})
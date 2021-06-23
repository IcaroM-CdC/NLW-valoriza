import express, { Request, Response, NextFunction} from "express"
import { CreateUserController } from "./controllers/createUserController"
import { CreateTagController } from "./controllers/createTagController"
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { errorHandler } from "./middlewares/errorHandler"
import "reflect-metadata"
import "express-async-errors"
import "./database"

const APP = express()
const PORT = 3003

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

APP.use(express.json())

APP.post("/users", createUserController.handle)
APP.post("/tags", ensureAdmin, createTagController.handle)


APP.use(errorHandler)

APP.listen(PORT, () => {

    console.log(`servidor rodando na URL http://localhost:${PORT}`)

})
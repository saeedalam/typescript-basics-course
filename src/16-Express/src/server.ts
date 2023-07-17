import express, { Request, Response } from "express"
import cors from "cors"
import mongoose from "mongoose"
import { createUser } from "./db/User";

const MONGO_URL = "mongodb+srv://svalam88:A$4rBds3s6keT$D@nodeapidb.es6evnu.mongodb.net/?retryWrites=true&w=majority"
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on("error" , (error : Error)=> {
    console.log(error.message)
})

const app = express()
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    console.log("hi")
    createUser({username : "saeed" , email : "svalam8819@gmail.com"})
    return res.send({ "msg": "hi" })
})



export default app ;
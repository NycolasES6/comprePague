import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Routes imports
import { usersRoutes } from "./routes/users.routes"
app.use("/users", usersRoutes)


app.listen(3000, ()=>console.log("Server started on port 3000"))
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import server from '../server/server.js'
import config from "../config/index.js"
import serviceRoute from "../modules/Services/services.route.js"

// import  server  from "../server/server.js"

const app = express()
app.use(cors())
app.use(express.json())
// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies (for forms)
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/services",serviceRoute)
app.listen(config.PORT, () => {
    server()
console.log(`Server is Running ${config.PORT}`)
})
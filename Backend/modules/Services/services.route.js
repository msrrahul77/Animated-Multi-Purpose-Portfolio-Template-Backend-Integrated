

import express from "express"
import { serviceController } from "./services.controllerss.js"


const router = express.Router()

router.post("/create-services",serviceController.createServices)
router.get("/",serviceController.getServices)
router.get("/:id",serviceController.getSingleService)

const serviceRoute=router
export default serviceRoute
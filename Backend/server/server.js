import mongoose from "mongoose"
import config from "../config/index.js"

 const server = () => {
mongoose.connect(config.DB_URL)
}
export default server


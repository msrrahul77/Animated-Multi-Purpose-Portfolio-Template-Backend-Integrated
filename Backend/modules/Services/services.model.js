import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({


    title: {

        type: String
    },
    imgLink: {
       type: String

    },
    des: {
          type: String,
    }


})

const Services=mongoose.model("Services",serviceSchema)
export default Services
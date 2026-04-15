import Services from "./services.model.js";

const createServices = async (req, res) => {
    try {



        console.log("req.body", req.body)

           const servicesData = new Services(req.body);

    const result = await servicesData.save();
    res.status(200).json({
    data:result
})

} catch (error) {
    console.log(error)
}

}
const getServices = async (req, res) => {
    try {
        const data = await Services.find();
        res.status(200).json({
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch services",
            error: error.message
        });
    }
};
const getSingleService = async (req, res) => {

    try {
        const id = req.params.id
        const data = await Services.findById(id)
        res.status(200).json({data:data})

    } catch (error) {
        console.log(error)

}

}
export const serviceController = { createServices, getServices,getSingleService }
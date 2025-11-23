import Dht22 from "../models/Dht22.js";
export const index = async(req, res) => {
    try {
        const dht = await Dht22.findUnique({
            where: {id: 1},
        });
        return res.status(200).json(dht);

    } catch (error) {
        res.status(404).json({message:"tidak ada data"})
    }
};

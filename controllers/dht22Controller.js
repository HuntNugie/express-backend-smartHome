import Dht22 from "../models/Dht22.js";
export const index = async (req, res) => {
    try {
        const dht = await Dht22.findUnique({
            where: {id: 1},
        });
        return res.status(200).json(dht);
    } catch (error) {
        res.status(404).json({message: "tidak ada data"});
    }
};

export const update = async (req, res) => {
    try {
        const {temp, humd} = req.params;

        const update = await Dht22.update({
            where: {id: 1},
            data: {temperature: parseFloat(temp), humidity: parseFloat(humd)},
        });

        return res.status(200).json(update);
    } catch (error) {
        return res.status(400).json({message: "gagal : " + error});
    }
};

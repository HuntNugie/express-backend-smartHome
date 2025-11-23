import Dht22 from "../models/Dht22.js";
import Maxs from "../models/Maxs.js";
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

export const indexMax = async (req, res) => {
    try {
        const data = await Maxs.findUnique({
            where: {id: 1},
        });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json("gagal : " + error);
    }
};


export const updateMax = async(req,res)=>{
    try {
        const {max_temp,max_humd} = req.body;
        const update = await Maxs.update({
            where:{
                id:1
            },
            data:{
                max_temp,
                max_humd
            }
        })

        res.status(200).json({message:"berhasil update",status:true,data:update})
    } catch (error) {
        res.status(400).json({message:"gagal update : "+error,status:false})
    }
}
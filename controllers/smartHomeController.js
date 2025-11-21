import SmartHome from "../models/SmartHome.js";

export const index = async(req,res)=>{
    const data = await SmartHome.findMany();
    res.status(200).json(data)
}

export const update = async(req,res)=>{
    const {id_toggle} = req.body;

    const data = await SmartHome.findUnique({
        where:{id:id_toggle}
    });

    const update = await SmartHome.update({
        where:{id:id_toggle},
        data:{
            status : !data.status
        }
    });

    res.status(200).json({update});
}
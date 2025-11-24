import Servo from "../models/Servo.js";

// untuk mendapatkan seluruh data
export const index = async (req, res) => {
    try {
        const data = await Servo.findUnique({
            where: {id: 1},
        });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json(`gagal ${error}`);
    }
};

export const update = async (req, res) => {
    try {
        const data = await Servo.findUnique({where: {id: 1}});
        const update = await Servo.update({
            where: {id: data.id},
            data: {
                status_servo: !data.status_servo,
            },
        });
        res.status(200).json({message: "berhasil update", status: true, data: update});
    } catch (error) {
        res.status(400).json({message: `error : ${error}`, status: false});
    }
};

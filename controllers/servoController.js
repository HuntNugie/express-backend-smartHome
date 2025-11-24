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

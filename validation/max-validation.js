import {body} from "express-validator";

const valid = [
    body("max_temp")
    .notEmpty()
    .withMessage("form maximal temperature wajib di isi")
    .isNumeric()
    .withMessage("wajib di isi dengan angka"),
    body("max_temp")
    .notEmpty()
    .withMessage("form maximal humidty wajib di isi")
    .isNumeric()
    .withMessage("wajib di isi dengan angka"),
];


export default valid;
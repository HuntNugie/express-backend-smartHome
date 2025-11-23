import {Router} from "express";
import {index, indexMax, update, updateMax} from "../controllers/dht22Controller.js";
import maxValid from "../validation/max-validation.js"
import { handleValidation } from "../middleware/handleValidation.js";
const route = Router();

// untuk mendapatkan data dht 22
route.get("/all", index);

// untuk mengupdate data dht 22
route.get("/update/:temp/:humd", update);

// untuk mendapatkan nilai maxs dht 22
route.get("/max", indexMax);

// untuk mengupdate nilai maxs dht 22
route.put("/max/update",maxValid,handleValidation, updateMax);
export default route;

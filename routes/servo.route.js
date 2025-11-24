import {Router} from "express";
import { index,update } from "../controllers/servoController.js";

const route = Router();
// untuk mendapatkan status servo nya sudah di buka atau tidak
route.get("/status",index);

// route untuk update status servo
route.put("/update",update)
export default route
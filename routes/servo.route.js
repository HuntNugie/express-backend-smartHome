import {Router} from "express";
import { index } from "../controllers/servoController.js";

const route = Router();
// untuk mendapatkan status servo nya sudah di buka atau tidak
route.get("/status",index);

export default route
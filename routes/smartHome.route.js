import { Router } from "express";
import { index, update } from "../controllers/smartHomeController.js";

const route = Router();

route.get("/status",index);
route.put("/smartHome/update",update)
export default route
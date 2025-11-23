import { Router } from "express";
import { index, update } from "../controllers/smartHomeController.js";
import dht22Route from "./dht22.route.js";
const route = Router();

// untuk route smartHome
route.get("/status",index);
route.put("/smartHome/update",update)

// untuk route dht
route.use("/dht22",dht22Route)
export default route
import { Router } from "express";
import { index, update } from "../controllers/smartHomeController.js";
import { index as indexDht,update as updateDht } from "../controllers/dht22Controller.js";
const route = Router();

// untuk route smartHome
route.get("/status",index);
route.put("/smartHome/update",update)

// untuk route dht
// untuk mendapatkan data dht 22
route.get("/dht22/all",indexDht)

// untuk mengupdate data dht 22
route.get("/dht22/update/:temp/:humd",updateDht);
export default route
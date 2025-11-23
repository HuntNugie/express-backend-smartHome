import { Router } from "express";
import { index, update } from "../controllers/smartHomeController.js";
import { index as indexDht } from "../controllers/dht22Controller.js";
const route = Router();

// untuk route smartHome
route.get("/status",index);
route.put("/smartHome/update",update)

// untuk route dht
route.get("/dht22/all",indexDht)

export default route
import { Router } from "express";
import { index as indexDht,update as updateDht } from "../controllers/dht22Controller.js";

const route = Router();

// untuk mendapatkan data dht 22
route.get("/all",indexDht)

// untuk mengupdate data dht 22
route.get("/update/:temp/:humd",updateDht);

export default route;
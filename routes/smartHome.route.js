import { Router } from "express";
import { index } from "../controllers/smartHomeController.js";

const route = Router();

route.get("/status",index);

export default route
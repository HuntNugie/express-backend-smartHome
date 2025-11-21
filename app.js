import express from "express";
import cors from "cors";
import smartHomeRoute from "./routes/smartHome.route.js"
import { config } from "dotenv";
import SmartHome from "./models/SmartHome.js";
config();

const app = express();

// untuk cors
app.use(cors());

// untuk route
app.use("/api",smartHomeRoute);

// untuk server
app.listen(process.env.SERVER_PORT,(err)=>{
    if(err){
        return console.log(err)
    };
    console.log(`server berjalan di port ${process.env.SERVER_PORT}`)
    
})
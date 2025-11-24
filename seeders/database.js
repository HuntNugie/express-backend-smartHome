import Dht22 from "../models/Dht22.js";
import Maxs from "../models/Maxs.js";
import Servo from "../models/Servo.js";
import SmartHome from "../models/SmartHome.js";

// const data = [
//     {
//         objek: "lampu kamar",
//         status: false,
//         pin: 5,
//     },
//     {
//         objek: "lampu dapur",
//         status: false,
//         pin: 4,
//     },
//     {
//         objek: "lampu teras",
//         status: false,
//         pin: 0,
//     },
//     {
//         objek: "tv",
//         status: false,
//         pin: 2,
//     },
//     {
//         objek: "wifi",
//         status: false,
//         pin: 14,
//     },
//     {
//         objek: "lampu keluarga",
//         status: false,
//         pin: 12,
//     },
// ];

// untuk smartHome
// async function main() {
//     await SmartHome.createMany({
//         data,
//     });
// }

// untuk dht22

// async function main() {
//     await Dht22.create();
// }

// untuk servo
async function main(){
    await Servo.create();
}

// untuk maximal
// async function main(){
//     await Maxs.create();
// }

main()
.then(() => {
    console.log("berhasil seeding ke database");
})
.catch((err) => {
    console.log("gagal seeding : " + err);
})
.finally(() => {
    console.log("seeding selesai");
});

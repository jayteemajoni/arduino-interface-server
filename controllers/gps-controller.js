import asyncHandler from "express-async-handler";
import { serialPort } from "../utils/serial.js";
import { DelimiterParser } from "serialport";

// interface GPDData{
//     latitude: string,
//     longitude: string,
//     date: string,
//     time: string,
// }

let latestData = "";
let gpsData = {};
const parser = serialPort.pipe(new DelimiterParser({ delimiter: "\n\r" }));

parser.on("data", (data) => {
  const dataString = data.toString();
  latestData = dataString;
});

// @desc          Change GPS Information
// @route         POST /api/gps
// @access        Public
export const getLatestGPSInfo = asyncHandler(async (req, res) => {
  let data = latestData.trim().split("\r\n");

  for (const value of data) {
    let k = value.split(":")[0].trim().toLowerCase();
    if (k && !k.match("Altitude")) {
      gpsData[k] = value.substring(value.indexOf(":") + 1).trim();
    }
  }

  return res.status(200).json(gpsData);
});

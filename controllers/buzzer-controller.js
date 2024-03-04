import asyncHandler from "express-async-handler";
import { serialPort } from "../utils/serial.js";

// @desc          Change Buzzer state
// @route         POST /api/led
// @access        Public
export const changeBuzzerState = asyncHandler(async (req, res) => {
  const { action } = req.body;

  switch (action.toUpperCase()) {
    case "ON": {
      serialPort.write("bh");
      return res.status(200).json({ message: "Buzzer is ON" });
    }
    case "OFF": {
      serialPort.write("bl");
      return res.status(200).json({ message: "Buzzer is OFF" });
    }
    default: {
      return res.status(404).json({ message: "UNKWON ACTION!" });
    }
  }
});

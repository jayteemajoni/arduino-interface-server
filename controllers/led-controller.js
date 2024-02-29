import asyncHandler from "express-async-handler";
import { serialPort } from "../utils/serial.js";

// @desc          Change LED state
// @route         POST /api/led
// @access        Public
export const changeLEDState = asyncHandler(async (req, res) => {
  const { action } = req.body;

  switch (action) {
    case "ON": {
      serialPort.write("lh");
      return res.status(200).json({ message: "LED is ON" });
    }
    case "OFF" : {
      serialPort.write("ll");
      return res.status(200).json({ message: "LED is OFF" });
    }
    default: {
      return res.status(404).json({ message: "UNKWON ACTION!" });
    }
  }
});

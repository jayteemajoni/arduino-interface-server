import { SerialPort } from "serialport";
import dotenv from 'dotenv'

dotenv.config()

const COM_PORT = process.env.COM_PORT

const serialPort = new SerialPort({
  path: COM_PORT,
  baudRate: Number.parseInt(process.env.BAUD_RATE),
});

serialPort.on("open", () => {
  console.log(`Serial comm opened on port: ${COM_PORT}`);
});


export {serialPort}
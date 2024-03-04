import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import {buzzer, gps, led} from "./routes/index.js";
import express from "express";
import { errorHandler } from "./middleware/error-handler.js";


dotenv.config();

const PORT = process.env.SERVER_PORT;
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(errorHandler)

app.use('/api/led', led)
app.use('/api/buzzer', buzzer)
app.use('/api/gps', gps)

app.get('/', (req, res) => res.status(200).json('Jaytee Robotics'))
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
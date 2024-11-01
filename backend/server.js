import  express  from "express";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from "./db/connectToMongoDB.js";


const app = express();

const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// app.get("/", (req, res) => {
//     res.send("Hello world!")
// })

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.listen(5000, () => {
    connectToMongoDB()
    console.log(`server running on port ${PORT}`)
})
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodroute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


// app config
const app = express()
const port = process.env.PORT || 4000;

// middleware 
app.use(express.json())
app.use(cors({
    origin:["https://deploy-mern-1whq.vercel.app"],
    methods:["POST","GET"],
    credentials:true
}));

//db connection

connectDB();

mongoose.connect('mongodb+srv://praneetha:Praneetha@9396@cluster0.ts76nd2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.get("/",(req,res)=>{
    res.send("API Working")
})


app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})


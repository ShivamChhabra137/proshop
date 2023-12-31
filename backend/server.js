import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"

const port = process.env.PORT

connectDB()

const app = express()

app.get("/", (req,res) => {
    res.send("Hello")
})

app.use("/api/products", productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
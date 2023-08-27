import users from "./data/users.js"
import products from "./data/products.js"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
import User from "./models/userModel.js"
import Product from "./models/productModel.js"
import Order from "./models/orderModel.js"

connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
        return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log("Data inserted successfully!")

    } catch (error) {
        console.log(`Error: ${error}`)        
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()
    } catch (error) {
        console.log(`Error: ${error}`)        
    }
}

if(process.argv[2] === "-d"){
    destroyData()
} else {
    importData()
}

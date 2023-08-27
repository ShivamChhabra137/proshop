import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModel.js"

// Get all products
const getProducts = asyncHandler (async (req,res) => {
    const products = await Product.find({})
    res.json(products)
})

// Get Product by ID
const getProductById = asyncHandler (async (req,res) => {
    const products = await Product.findById(req.params.id)
    if(products){
        res.json(products)
    }else {
        res.status(404)
        throw new Error('Resource not found!!!')
    }
})

export { getProductById, getProducts }


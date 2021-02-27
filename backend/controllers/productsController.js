import asyncHandler from 'express-async-handler';
import Product from '../models/Product.js';

export const getProducts = asyncHandler(async (req, res) => {
    const pageSize = 10
    const page = Number(req.query.pageNumber) || 1

    const keyword = req.query.keyword
        ? {
            name: {
                $regex: req.query.keyword,
                $options: 'i',
            },
        }
        : {}

    const count = await Product.countDocuments({ ...keyword })
    const data = await Product.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1))

    res.json({ data, page, pages: Math.ceil(count / pageSize) })
})

export const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

export const createProduct = asyncHandler(async (req, res) => {
    const { name, price, image, description, category } = req.body;
    const product = new Product({
        name,
        price,
        image,
        description,
        category

    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})
import express from 'express'
const router = express.Router()
import {
    getProductById,
    createProduct,
    getProducts

} from '../controllers/productsController.js'


router.route('/').get(getProducts).post(createProduct)
router
    .route('/:id')
    .get(getProductById)


export default router;

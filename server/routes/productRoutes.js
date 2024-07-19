const express = require('express')
const router = express.Router()
const {getAllProducts, addReviewToProduct, getReviewsForProduct} = require('../services/productService')
const authenticate = require('../middleware/authenticate');

router.get('/', getAllProducts)
router.post('/:productId/reviews', authenticate, addReviewToProduct)
router.get('/:productId/reviews', getReviewsForProduct)

module.exports = router
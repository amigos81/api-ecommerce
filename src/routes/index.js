const express = require('express');
const routerUser = require('./user.router');
const routerCategory = require('./category.router');
const routerProduct = require('./product.router');
const routerCart = require('./cart.router');
const router = express.Router();

const { verifyJwt } = require('../utils/verifyJWT');

// colocar las rutas aquí

router.use('/users',routerUser)
router.use('/categories',routerCategory)

router.use('/products', routerProduct)


router.use('/carts', verifyJwt,routerCart)

module.exports = router;
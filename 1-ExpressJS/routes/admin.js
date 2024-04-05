const express = require('express');
const router = express.Router();
const addProductController = require('../controllers/admin')

// /admin/add-product => GET
router.get('/add-product', addProductController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', addProductController.postAddProduct)

module.exports = router;
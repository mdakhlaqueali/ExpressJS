const express = require('express');
const router = express.Router();

router.get('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Add Product"><input type="number" name="size" placeholder="Enter size"><button type="submit">Add Product</button></form>');
});

router.post('/product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;
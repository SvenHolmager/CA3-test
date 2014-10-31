var express = require('express');
var router = express.Router();
var Product = require("../model/products");
var OrderDetail = require("../model/orderDetails");

/* GET Start Page */
router.get('/', function (req, res) {
    Product.getAllProducts(function (err, allProducts) {
        if (err) {
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        console.log(allProducts);
        res.render("allProducts",{products: allProducts.sort(id_sort_asc)});
    })
});

router.get("/:productId", function(req, res){
    var productId = req.params.productId;
    OrderDetail.getOrderDetailsWithProductId(productId,function(err,allOrderDetails){
        if(err){
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.render("productDetails",{orderDetails: allOrderDetails.sort()});
    })
});

router.delete("/:id",function(req,res){
    Product.deleteProduct(req.params.id,function(err,removedProduct){
        if(err){
            res.status(err.status || 500);
            res.send(JSON.stringify({error: e.toString()}));
            return;
        }
        res.send(JSON.stringify(removedProduct));
    })
});

var id_sort_asc = function (entry1, entry2) {
    // This is a comparison function that will result in ids being sorted in
    // DESCENDING order.4
    if (entry1._id < entry2._id) return -1;
    if (entry1._id > entry2._id) return 1;
    return 0;
};

module.exports = router;

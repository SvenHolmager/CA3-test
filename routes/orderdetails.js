var express = require('express');
var router = express.Router();
var OrderDetail = require("../model/orderdetails");

/* GET orderdetails. */
router.get('/:orderid', function (req, res) {
    console.log("here");
    var orderid = req.params.orderid;
    console.log(orderid);
    OrderDetail.getOrderDetails(orderid, function (err, details) {
        if (err) {
            return err;
        }
        console.log(details);
        res.end(JSON.stringify(details));
    })
});

var date_sort_desc = function (entry1, entry2) {
    // This is a comparison function that will result in dates being sorted in
    // DESCENDING order.
    if (entry1.orderDate > entry2.orderDate) return -1;
    if (entry1.orderDate < entry2.orderDate) return 1;
    return 0;
};

module.exports = router;

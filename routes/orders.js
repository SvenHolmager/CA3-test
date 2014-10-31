var express = require('express');
var router = express.Router();
var Order = require("../model/orders");

/* GET orders listing. */
router.get('/', function (req, res) {
    console.log("here");
    Order.getAllOrders(function (err, allOrders) {
        if (err) {
            return err;
        }
        console.log(allOrders);
        res.render("allOrders", {orders: allOrders.sort(date_sort_desc)});
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

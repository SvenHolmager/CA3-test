var express = require('express');
var router = express.Router();
var Customer = require("../model/customers");
var Order = require("../model/orders");

/* GET Start Page */
router.get('/', function (req, res) {
    Customer.getAllCustomers(function (err, allCustomers) {
        if (err) {
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        console.log(allCustomers);
        res.render("allCustomers",{customers: allCustomers});
        //res.header("Content-type", "application/json");
        //res.end(JSON.stringify(allCustomers));
    })
});

router.get("/:customerId", function(req, res){
    var customerId = req.params.customerId;
    Order.getOrdersByCustomerId(customerId, function(err, allOrders){
        if(err){
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.render("customerDetails",{orders: allOrders.sort()});
    })
});

/*
router.get("/:id", function(req, res){
    var id = req.params.id;
    Customer.getCustomerById(id,function(err,customer){
        if(err){
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.set("Content-Type","application/json");
        res.end(JSON.stringify(customer));
    })
});
*/

router.delete("/:id",function(req,res){
    Customer.deleteCustomer(req.params.id,function(err,removedCustomer){
        if(err){
            res.status(err.status || 500);
            res.send(JSON.stringify({error: e.toString()}));
            return;
        }
        res.send(JSON.stringify(removedCustomer));
    })
});

module.exports = router;

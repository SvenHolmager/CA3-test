var express = require('express');
var router = express.Router();
var Employee = require("../model/employees");
var Order = require("../model/orders");

/* GET Start Page */
router.get('/', function (req, res) {
    Employee.getAllEmployees(function (err, allEmployees) {
        if (err) {
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        console.log(allEmployees);
        res.render("allEmployees",{employees: allEmployees});
        //res.header("Content-type", "application/json");
       // res.end(JSON.stringify(allEmployees));
    })
});

router.get("/:employeeId", function(req, res){
    var employeeId = req.params.employeeId;
    Order.getOrdersByEmployeeId(employeeId, function(err, allOrders){
        if(err){
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.render("employeeDetails",{orders: allOrders.sort()});
    })
});

router.delete("/:id",function(req,res){
    Employee.deleteEmployee(req.params.id,function(err,removedEmployee){
        if(err){
            res.status(err.status || 500);
            res.send(JSON.stringify({error: e.toString()}));
            return;
        }
        res.send(JSON.stringify(removedEmployee));
    })
});

module.exports = router;

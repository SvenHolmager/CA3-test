var mongoose = require('mongoose');
var db = require("./db");
var Order = mongoose.model('Order');


function getAllOrders(callback) {
    Order.find({}, function (err, jokes) {
        if (err) {
            return callback(err);
        }
        callback(null, jokes);
    });
}

function getOrdersByEmployeeId(id, callback) {
    Order.find({ employeeId: id }, function (err, orders) {
        if (err) {
            return callback(err);
        }
        callback(null, orders);
    });
}

function getOrdersByCustomerId (id, callback) {
    Order.find({ customerId: id }, function (err, orders) {
        if (err) {
            return callback(err);
        }
        callback(null, orders);
    });
}

module.exports = {
    getAllOrders: getAllOrders,
    getOrdersByEmployeeId: getOrdersByEmployeeId,
    getOrdersByCustomerId: getOrdersByCustomerId
}
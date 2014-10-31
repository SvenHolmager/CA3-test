var mongoose = require('mongoose');
var db = require("./db");
var OrderDetail = mongoose.model('OrderDetail');


function getOrderDetails(id, callback) {
    OrderDetail.find({ orderId: id }, function (err, jokes) {
        if (err) {
            return callback(err);
        }
        callback(null, jokes);
    });
}


function getOrderDetailsWithProductId  (id, callback) {
    OrderDetail.find({ productId: id }, function (err, orderDetails) {
        if (err) {
            return callback(err);
        }
        callback(null, orderDetails);
    });
}


module.exports = {
    getOrderDetails: getOrderDetails,
    getOrderDetailsWithProductId: getOrderDetailsWithProductId
}
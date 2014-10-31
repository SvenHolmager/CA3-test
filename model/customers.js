var mongoose = require('mongoose');
var db = require("./db");
var Customer = mongoose.model('Customer');

function getAllCustomers(callback){
    Customer.find({}, function (err, customers){
        if(err){
            return callback(err);
        }
        callback(null,customers);
    });
}

function getCustomerById(id, callback){
    Customer.findById(id, function (err, customer){
        if (err){
            return callback(err);
        }
        callback(null, customer);
    });
}

function addCustomer(cg, callback){
    Customer.create(cg, function (err, newCustomer){
        if (err) {
            return callback(err);
        }
        callback(null,newCustomer);
    });
}

function deleteCustomer(id,callback){
    Customer.findByIdAndRemove(id,function(err,removedCustomer){
        if(err) {
            return callback (err);
        }
        callback(null,removedCustomer);
    });
}

function updateCustomer(cg, callback){
    Customer.findByIdAndUpdate(cg._id,category,function(err,updatedCustomer){
        if(err){
            return callback(err);
        }
        callback(null,updatedCustomer);
    });
}

module.exports = {
    getAllCustomers: getAllCustomers,
    getCustomerById: getCustomerById,
    addCustomer: addCustomer,
    deleteCustomer: deleteCustomer,
    updateCustomer: updateCustomer

}
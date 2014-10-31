var mongoose = require('mongoose');
var db = require("./db");
var Product = mongoose.model('Product');

function getAllProducts(callback){
    Product.find({}, function (err, products){
        if(err){
            return callback(err);
        }
        callback(null,products);
    });
}

function getProductById(id, callback){
    Product.findById(id, function (err, product){
        if (err){
            return callback(err);
        }
        callback(null, product);
    });
}

function addProduct(cg, callback){
    Product.create(cg, function (err, newProduct){
        if (err) {
            return callback(err);
        }
        callback(null,newProduct);
    });
}

function deleteProduct(id,callback){
    Product.findByIdAndRemove(id,function(err,removedProduct){
        if(err) {
            return callback (err);
        }
        callback(null,removedProduct);
    });
}

function updateProduct(cg, callback){
    Product.findByIdAndUpdate(cg._id,category,function(err,updatedProduct){
        if(err){
            return callback(err);
        }
        callback(null,updatedProduct);
    });
}

function getProductsByCategoryId(id, callback) {
    Product.find({ categoryId: id }, function (err, products) {
        if (err) {
            return callback(err);
        }
        callback(null, products);
    });
}

module.exports = {
    getAllProducts: getAllProducts,
    getProductsByCategoryId: getProductsByCategoryId,
    getProductById: getProductById,
    addProducts: addProduct,
    deleteProducts: deleteProduct,
    updateProducts: updateProduct
}
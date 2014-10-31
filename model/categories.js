var mongoose = require('mongoose');
var db = require("./db");
var Category = mongoose.model('Category');

function getAllCategories(callback){
    Category.find({}, function (err, categories) {
        if(err) {
            return callback(err);
        }
        callback(null, categories);
    });
}
function getCategoryById(id, callback){
    Category.findById(id, function (err, category){
        if (err){
            return callback(err);
        }
        callback(null, category);
    });
}

function addCategory(cg, callback){
    Category.create(cg, function (err, newCategory){
        if (err) {
            return callback(err);
        }
        callback(null,newCategory);
    });
}

function deleteCategory(id,callback){
    Category.findByIdAndRemove(id,function(err,removedCategory){
        if(err) {
            return callback (err);
        }
        callback(null,removedCategory);
    });
}

function updateCategory(cg, callback){
    Category.findByIdAndUpdate(cg._id,category,function(err,updatedCategory){
        if(err){
            return callback(err);
        }
        callback(null,updatedCategory);
    });
}

module.exports = {
    getAllCategories: getAllCategories,
    getCategoryById: getCategoryById,
    addCategory: addCategory,
    deleteCategory: deleteCategory,
    updateCategory: updateCategory
}
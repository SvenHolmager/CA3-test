var mongoose = require('mongoose');
var db = require("./db");
var Employee = mongoose.model('Employee');

function getAllEmployees(callback){
    Employee.find({}, function (err, employees){
        if(err){
            return callback(err);
        }
        callback(null,employees);
    });
}

function getEmployeeById(id, callback){
    Employee.findById(id, function (err, employee){
        if (err){
            return callback(err);
        }
        callback(null, employee);
    });
}

function addEmployee(emp, callback){
    Employee.create(emp, function (err, newEmployee){
        if (err) {
            return callback(err);
        }
        callback(null,newEmployee);
    });
}

function deleteEmployee(id,callback){
    Employee.findByIdAndRemove(id,function(err,removedEmployee){
        if(err) {
            return callback (err);
        }
        callback(null,removedEmployee);
    });
}

function updateEmployee(emp, callback){
    Employee.findByIdAndUpdate(emp._id,category,function(err,updatedEmployee){
        if(err){
            return callback(err);
        }
        callback(null,updatedEmployee);
    });
}



module.exports = {
    getAllEmployees: getAllEmployees,
    getEmployeeById: getEmployeeById,
    addEmployee: addEmployee,
    deleteEmployee: deleteEmployee,
    updateEmployee: updateEmployee

}
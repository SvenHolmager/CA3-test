var express = require('express');
var router = express.Router();
var Category = require("../model/categories");
var Product = require("../model/products");

/* GET Start Page */
router.get('/', function (req, res) {
    Category.getAllCategories(function (err, allCategories) {
        if (err) {
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        console.log(allCategories);
        res.render("allCategories",{categories: allCategories.sort(id_sort_asc)});
        //res.header("Content-type", "application/json");
        //res.end(JSON.stringify(allCategories));
    })
});

router.get("/:categoryId", function(req, res){
    var categoryId = req.params.categoryId;
    Product.getProductsByCategoryId(categoryId, function(err, allProducts){
        if(err){
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.render("categoryDetails",{products: allProducts.sort(id_sort_asc)});
    })
});

router.post("/",function(req, res){
    var CategoryToSave = req.body;  //This works because of the app.use(bodyParser.json()) middleware
    console.log(JSON.stringify(person));
    Category.addCategory(CategoryToSave,function(err,savedCategory){
        res.set("Context-Type","application/json");
        if(err){
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.send(JSON.stringify(savedCategory));
    })
});

router.put("/",function(req, res){
    var CategoryToUpdate = req.body;  //This works because of the app.use(bodyParser.json()) middleware
    console.log(JSON.stringify(person));
    Category.updateCategory(CategoryToUpdate,function(err,savedCategory){
        res.set("Context-Type","application/json");
        if(err){
            res.status(err.status || 500);
            res.send(JSON.stringify({error: e.toString()}));
            return;
        }
        res.send(JSON.stringify(savedCategory));
    })
});

router.delete("/:id",function(req,res){
    Category.deleteCategory(req.params.id,function(err,removedCategory){
        if(err){
            res.status(err.status || 500);
            res.send(JSON.stringify({error: e.toString()}));
            return;
        }
        res.send(JSON.stringify(removedCategory));
    })
});

var id_sort_asc = function (entry1, entry2) {
    // This is a comparison function that will result in ids being sorted in
    // DESCENDING order.4
    if (entry1._id < entry2._id) return -1;
    if (entry1._id > entry2._id) return 1;
    return 0;
};

module.exports = router;

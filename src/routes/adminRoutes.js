var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var products = [
        {
            productName: 'Cloro x 1Lts',
            productPrice: 10,
        },
        {
            productName: 'Jabon Ariel x 5Lts',
            productPrice: 85,
        },
        {
            productName: 'Escoba',
            productPrice: 35,
        },
        {
            productName: 'Escoba',
            productPrice: 45,
        },
        {
            productName: 'Escoba',
            productPrice: 55,
        },
        {
            productName: 'Escoba',
            productPrice: 65,
        },
        {
            productName: 'Escoba',
            productPrice: 85,
        },
    ];

var offers = [
        {
            offerName: 'Promo 1',
            offerPrice: 50,
            offerDesc: 'Producto1 - Producto2 - Producto 3'
        },
        {
            offerName: 'Promo 2',
            offerPrice: 60,
            offerDesc: 'Producto1 - Producto2 - Producto 3'
        },
        {
            offerName: 'Promo 3',
            offerPrice: 50,
            offerDesc: 'Producto1 - Producto2 - Producto 3'
        },
        {
            offerName: 'Promo 4',
            offerPrice: 50,
            offerDesc: 'Producto1 - Producto2 - Producto 3'
        },
        {
            offerName: 'Promo 5',
            offerPrice: 50,
            offerDesc: 'Producto1 - Producto2 - Producto 3'
        },
        {
            offerName: 'Promo 6',
            offerPrice: 50,
            offerDesc: 'Producto1 - Producto2 - Producto 3'
        },
        {
            offerName: 'Promo 7',
            offerPrice: 50,
            offerDesc: 'Producto1 - Producto2 - Producto 3'
        },
        {
            offerName: 'Promo 8',
            offerPrice: 50,
            offerDesc: 'Producto1 - Producto2 - Producto 3'
        },
        {
            offerName: 'Promo 9',
            offerPrice: 50,
            offerDesc: 'Producto1 - Producto2 - Producto 3'
        },
        {
            offerName: 'Promo 10',
            offerPrice: 50,
            offerDesc: 'Producto1 - Producto2 - Producto 3'
        },
        {
            offerName: 'Promo 11',
            offerPrice: 50,
            offerDesc: 'Producto1 - Producto2 - Producto 3'
        },

    ];

var router = function(nav) {
   //var bookService = require('../services/goodreadsService')();
    var adminController = require('../controllers/adminController')(null, nav);
    var productController = require('../controllers/productController')();
    var offerController = require('../controllers/offerController')();
    //ofertasRouter.use(bookController.middleware);
    adminRouter.route('/addProduct')
        .get(adminController.getAddProduct)
        .post(productController.addProduct);
    // ofertasRouter.route('/:id')
    //    .get(bookController.getById);
    adminRouter.route('/addOffer')
        .post(offerController.addOffer);
    adminRouter.route('/addProductData')
        .get(function(req,res) {
            var url = 'mongodb://localhost:27017/CleanShop';
            mongodb.connect(url, function(err,db) {
                var collection = db.collection('products');
                collection.insertMany(products, function(err, results) {
                    res.send(results);
                    db.close();
                });
            });
        });

    adminRouter.route('/addOffersData')
        .get(function(req,res) {
            var url = 'mongodb://localhost:27017/CleanShop';
            mongodb.connect(url, function(err,db) {
                var collection = db.collection('offers');
                collection.insertMany(offers, function(err, results) {
                    res.send(results);
                    db.close();
                });
            });
        });

    return adminRouter;
};

module.exports = router;
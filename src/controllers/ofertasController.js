var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var configs = require('../config/configuration.js')();

var ofertasController = function(bookService, nav) {
    var middleware = function(req,res,next) {
        // if (!req.user) {
        //     res.redirect('/');
        // }
        next();
    };
    var getIndex = function(req,res) {
            // res.render('index', {
            //             title : 'Ofertas' ,
            //             nav: nav,
            //             books : null
            //         });
            var url = configs.DataBaseUrl;
            mongodb.connect(url, function(err,db) {
                var collection = db.collection('offers');
                collection.find({}).toArray(function(err, results) {
                    res.render('index', {
                        title : 'Ofertas' ,
                        nav: nav,
                        offers : results
                    });
                });
            });
        };

    // var getById = function(req,res) {
    //         var id = new ObjectId(req.params.id);
    //         var url = 'mongodb://localhost:27017/libraryApp';
    //         mongodb.connect(url, function(err,db) {
    //             var collection = db.collection('books');
    //             collection.findOne({_id:id},
    //                 function(err, results) {
    //                     bookService.getBookById(results.bookId, function(err, book) {
    //                         results.book = book;
    //                         res.render('bookView', {
    //                             title : 'Books' ,
    //                             nav: nav,
    //                             book : results
    //                         });
    //                     });
    //                 });
    //         });
    //     };

    return {
        getIndex: getIndex,
        // getById: getById,
        // middleware : middleware
    };
};

module.exports = ofertasController;
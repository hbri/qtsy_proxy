const mongoose = require('mongoose');
var seeds = require('./seedData.js')
var _ = require('lodash');
mongoose.connect('mongodb://localhost/qtsy', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));

let productSchema = mongoose.Schema({
  sellerId: [Number],
  imageUrl: String,
  price: Number,
  name: String
});

let sellerSchema = mongoose.Schema({
  imageUrl: String,
  name: String,
  createdAt: String,
  totalSales: Number,
  location: String
})

let Product = mongoose.model('Product', productSchema);
let Seller = mongoose.model('Seller', sellerSchema);

var getSeller = function(sellerName, sellerObj) {
  Seller.find({name: sellerName}, (err, doc) => {
    if (err) {
      console.error(err)
    }
    var sellerInfo = doc[0];
    var sellerID = doc[0]._doc._id;
    console.log(doc)
    console.log(sellerInfo);
    console.log(sellerID)
    Product.find({sellerId: sellerID}, (err, docs) => {
      if (err) {
        console.error(err)
      }
      var sellerObject = docs;
      sellerObject.push(sellerInfo);
      sellerObj(sellerObject)
    })
  })
};



module.exports.getSeller = getSeller;
const User = require("./User")
const Category = require("./Category")
const Product = require('./Product')
// const Cart = require("./Cart")
// const Purchase = require("./Purchase")
// const ProductImg = require("./ProductImg")



//Product -> categoryId
Product.belongsTo(Category)
Category.hasMany(Product)

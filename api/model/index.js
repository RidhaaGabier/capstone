const Users = require('./users')
const Product = require ('./products')
const Orders = require ('./orders')
module.exports = {
    users: new Users,
    product:new Product,
    orders: new Orders
}
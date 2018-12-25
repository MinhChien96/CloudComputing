'use strict'
const db = require("../entities");

exports.getAll = ()=>{
    return db.products.findAll();
}
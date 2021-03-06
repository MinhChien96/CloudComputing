'use strict';

var fs = require('fs'); //thư viện đọc file
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../../config/config.json')[env]; //đọc thông tin trong config ở development
var db = {};

// var sequelize = new Sequelize(config.database, config.username, config.password, config);
if (config.use_env_variable) { //khi deploy lên host
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
  // var sequelize = new Sequelize(config.database, config.username, config.password, {
  //   pool: {
  //     max: 5,
  //     idle: 30000,
  //     acquire: 60000,
  //   }
  // });
}

fs
  .readdirSync(__dirname)
  .filter(file => { 
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    //import a single file- link tài liêu: http://docs.sequelizejs.com/manual/tutorial/models-definition.html#import
    var model = sequelize['import'](path.join(__dirname, file)); 
    db[model.name] = model; 
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);//tạo các liên kết các bảng,
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
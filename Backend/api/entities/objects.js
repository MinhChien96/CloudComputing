/* jshint indent: 2 */
var models = require("./index");
module.exports = function(sequelize, DataTypes) {
  var objects = sequelize.define('objects', {
    object_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    icon_css: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    object_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    object_level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    object_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    object_url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'objects',
    timestamps: false
  });
  objects.associate = function (models) {
    objects.hasMany(models.role_object, {
      foreignKey: 'object_id',
      sourceKey: 'object_id'
    });
    objects.hasMany(models.user_object, {
      foreignKey: 'object_id',
      sourceKey: 'object_id'
    });
  }
  return objects;
};

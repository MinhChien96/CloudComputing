/* jshint indent: 2 */
var models = require("./index");


module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fullname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    adress: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    mobilephone: {
      type: "VARBINARY(20)",
      allowNull: true
    }
  }, {
      tableName: 'users',
      timestamps: false
    });
  users.associate = function (models) {
    users.hasMany(models.role_user, {
      foreignKey: 'user_id',
      sourceKey: 'user_id'
    });
    users.hasMany(models.user_object, {
      foreignKey: 'user_id',
      sourceKey: 'user_id'
    });
  }
  return users;
}

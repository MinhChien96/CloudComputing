/* jshint indent: 2 */
var models = require("./index");

module.exports = (sequelize, DataTypes) => {
  var roles = sequelize.define('roles', {
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    creator_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    creator_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    role_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
      tableName: 'roles',
      timestamps: false
    });
  roles.associate = function (models) {
    roles.hasMany(models.role_user, {
      foreignKey: 'role_id',
      sourceKey: 'role_id'
    });
    roles.hasMany(models.role_object, {
      foreignKey: 'role_id',
      sourceKey: 'role_id'
    });
    // question.belongsTo(models.subject, {
    //   foreignKey: 'idsub',
    //   targetKey: 'idsub'
    // });
  }
  return roles;
};

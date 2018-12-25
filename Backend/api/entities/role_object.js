/* jshint indent: 2 */
var models = require("./index");
module.exports = function (sequelize, DataTypes) {
  var role_object = sequelize.define('role_object', {
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'roles',
        key: 'role_id'
      }
    },
    object_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'objects',
        key: 'object_id'
      }
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    is_active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    ct_access: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ct_add: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ct_edit: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ct_delete: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
      tableName: 'role_object',
      timestamps: false
    });
  role_object.associate = function (models) {
    // question.hasMany(models.anwser, {
    //   foreignKey: 'idquestion',
    //   sourceKey: 'idquestion'
    // });
    role_object.belongsTo(models.objects, {
      foreignKey: 'object_id',
      targetKey: 'object_id'
    });
    role_object.belongsTo(models.roles, {
      foreignKey: 'role_id',
      targetKey: 'role_id'
    });
  }
  return role_object;
};

/* jshint indent: 2 */
var models = require("./index");
module.exports = function(sequelize, DataTypes) {
  var user_object= sequelize.define('user_object', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_id'
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
      type: DataTypes.INTEGER(11),
      allowNull: true
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
    tableName: 'user_object',
    timestamps: false
  });
  user_object.associate = function (models) {
    // question.hasMany(models.anwser, {
    //   foreignKey: 'idquestion',
    //   sourceKey: 'idquestion'
    // });
    user_object.belongsTo(models.users, {
      foreignKey: 'user_id',
      targetKey: 'user_id'
    });
    user_object.belongsTo(models.objects, {
      foreignKey: 'object_id',
      targetKey: 'object_id'
    });
  }
  return user_object;
};

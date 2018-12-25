/* jshint indent: 2 */
var models = require("./index");

module.exports = (sequelize, DataTypes) => {
  var role_user = sequelize.define('role_user', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'roles',
        key: 'role_id'
      }
    },
    is_active: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
      tableName: 'role_user',
      timestamps: false
    });
  role_user.associate = function (models) {
    // question.hasMany(models.anwser, {
    //   foreignKey: 'idquestion',
    //   sourceKey: 'idquestion'
    // });
    role_user.belongsTo(models.users, {
      foreignKey: 'user_id',
      targetKey: 'user_id'
    });
    role_user.belongsTo(models.roles, {
      foreignKey: 'role_id',
      targetKey: 'role_id'
    });
  }
  return role_user;
};

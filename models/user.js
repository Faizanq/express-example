'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING
  },{underscored: false});

  User.associate = function(models) {
    models.User.hasMany(models.Task,{foreignKey: 'user_id'});
  };

  return User;
};

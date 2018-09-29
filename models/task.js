'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING
  },{underscored: false});

  Task.associate = function (models) {
    models.Task.belongsTo(models.User);
  };

  return Task;
};

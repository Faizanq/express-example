'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING,
     uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1
        },
  },{});

  Task.associate = function (models) {
    models.Task.belongsTo(models.User);
  };

  return Task;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
     uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1
        },
  },{});

  User.associate = function(models) {
    models.User.hasMany(models.Task,{foreignKey: 'user_id'});
  };

  return User;
};


// foreignKey: {
//     name: 'uid',
//     allowNull: false
//   }

 // personId: {
 //       type: Sequelize.INTEGER,
 //       references: {
 //          model: 'persons', // 'persons' refers to table name
 //          key: 'id', // 'id' refers to column name in persons table
 //       }
 //    }
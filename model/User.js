const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/connection');

class User extends Model {

}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      }
    },
  },
  {
  //  Every time we call User.create, this "hook" will be called
  //  to hash the users password and make it mumbo jumbo
  //  User.create({ email: 'm@m.com', password: 'password' })
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
      }
    },
    sequelize,
    freezeTableName: true,
    modelName: 'user'
  }
);

module.exports = User;
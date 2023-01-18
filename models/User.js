const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleId: String,
  highscore: Number,
});

const User = mongoose.model('user', userSchema);

module.exports = User;





// const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const sequelize = require('../config/connection');

// class User extends Model {
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }
// }

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     highScore: {
//       type: DataTypes.INTEGER, 
//       allowNull: true, 
//   }
    
//   },
//   {

//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'user',
//   }
// );

// module.exports = User;

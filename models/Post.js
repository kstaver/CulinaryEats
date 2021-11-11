const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
//create Post model
class Post extends Model {}
// create fields/columns for Post model
Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
<<<<<<< HEAD
      description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
    //may need to adjust
      ingredients: {
          type: DataTypes.STRING (1000),
          allowNull: false
      },

      instructions: {
          type: DataTypes.STRING(1000),
          allowNull: false,
      },
      category: {
      type: DataTypes.STRING,
      allowNull: false
      },
=======

    //may need to adjust
      // ingregients: {
      //     type: DataTypes.STRING (300),
      //     allowNull: false
      // },

      // instructions: {
      //     type: DataTypes.STRING(1000),
      //     allowNull: false,
      // },

    post_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
>>>>>>> 2dec411c4f757f1237db56992570b32349b1c423
    // used for who posted comment
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id'
    //   }
    // }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );
  module.exports = Post;

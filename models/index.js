// Imports
const User = require("./User");
const BlogPost = require("./BlogPost");
const Comment = require("./Comment");

// Sets up relationship between tables and allows me to join them using Sequelize
User.hasMany(BlogPost, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

BlogPost.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(BlogPost, {
  foreignKey: "blogPost_id",
  onDelete: "CASCADE",
});

BlogPost.hasMany(Comment, {
  foreignKey: "blogPost_id",
  onDelete: "CASCADE",
});

// Export
module.exports = { User, BlogPost, Comment };
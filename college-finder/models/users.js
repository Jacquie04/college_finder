var bcrypt = require("bcrypt-nodejs");

//for password hashing.

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      } 
    }, 
    

    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  //Will check if inputed and stored passpords can be compared.
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  //Before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return User;
};

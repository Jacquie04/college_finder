module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        //for now this is a placeholder. changed based off AUTHENTICATION needs
        name: DataTypes.STRING,
        createdAt: {
            allowNull: false,
            defaultValue: new Date(),
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            defaultValue: new Date(),
            type: DataTypes.DATE,
        }
    });

    User.associate = function (models) {
        User.hasMany(models.College, {
            onDelete: "cascade"
        });
    };

    return User;
};
module.exports = function (sequelize, DataTypes) {
    var College = sequelize.define("College", {
        name: DataTypes.STRING,
        alias: DataTypes.STRING,
        city: DataTypes.STRING,
        zip: DataTypes.INTEGER,
        sat_score: DataTypes.INTEGER,
        admission_rate: DataTypes.FLOAT,
        population: DataTypes.INTEGER,
        tuition_out_of_state: DataTypes.INTEGER,
        tuition_in_state: DataTypes.INTEGER,
        cost_average_annual: DataTypes.INTEGER,
        loan_average: DataTypes.INTEGER,
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

College.associate = function (models) {
    College.belongsTo(models.User, {
        foreignKey: {
            allowNull: false
        }
    });
};

return College;

};

//to whomever is reading this -- Don't forget you have to create the SQL database 'collegefinder' before your server will not error out
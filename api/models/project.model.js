module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Project", {
        status: DataTypes.TEXT,
        name:  DataTypes.TEXT,
        location:  DataTypes.TEXT,
        company:  DataTypes.TEXT
    });
}
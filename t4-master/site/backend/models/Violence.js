const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Violence extends Model {
        static associate(db) {
            Violence.hasMany(db.Situation);
        }
    }

    Violence.init({
        type: {
            type: DataTypes.ENUM('physique', 'psychologique', 'sexuelle', 'verbale', 'économique','psychologique'),
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Violence'
    });

    return Violence;
};

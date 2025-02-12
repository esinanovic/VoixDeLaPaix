const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Person extends Model {
        static associate(db) {
            Person.belongsToMany(db.Situation, {through: 'PersonSituation'});
        };
    }

    Person.init({
        firstname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        poids:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        sexe:{
            type: DataTypes.ENUM('F','H'),
            allowNull:false
        },
        taille:{
            type: DataTypes.FLOAT,
            allowNull:false
        },
        origine: {
            type: DataTypes.STRING,
            allowNull:false
        },
        tolerance: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        attributs: { // Tableau des valeurs qui représentent le degré de résistance de la personne face à chaque type de violence : 1 case = 1 valeur et 1 case représente 1 type prédéfini
            type:DataTypes.STRING,
            allowNull:false
        },
        situation:{
            type:DataTypes.STRING,
            allowNull:false
    },


    }, {
        sequelize,
        modelName:'Person'
    });

    return Person;
};

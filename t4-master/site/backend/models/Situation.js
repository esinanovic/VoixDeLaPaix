const {Model,DataTypes}=require('sequelize');

//Les informations stockées pourraient inclure le type d'action, son impact sur la barre de tolérance du personnage et les conséquences potentielles de l'action.
//niveau de risque de violence, rencontres de la journée, types de situations, 
module.exports=(sequelize)=>{
    class Situation extends Model{
        static associate(db){
            Situation.belongsToMany(db.Person, { through: "PersonSituation" });
            Situation.belongsTo(db.Violence);
            Situation.belongsToMany(db.Action, { through: "ActionSituation" });
        };
    }

    Situation.init({
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        label:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        severity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },  {
            sequelize,
            modelName:'Situation'
        }
    );
    
    return Situation;
};
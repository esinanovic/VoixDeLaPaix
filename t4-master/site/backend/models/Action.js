const {Model,DataTypes}=require('sequelize');

//Les informations stockées pourraient inclure le type d'action, son impact sur la barre de tolérance du personnage et les conséquences potentielles de l'action.

module.exports=(sequelize)=>{
    class Action extends Model{
        static associate(db){
            Action.belongsToMany(db.Situation, { through: "ActionSituation" });
        };
    }

    Action.init({
        type:{
            type:DataTypes.ENUM('pacifique','violente'),
            allowNull:false
        },
        label:{
            type:DataTypes.STRING,
            allowNull:false
        },
        impact:{
            type:DataTypes.INTEGER,
            allowNull:false
        },

    },  {
            sequelize,
            modelName: 'Action'
        }
    )

    return Action;
}
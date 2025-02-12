const db = require('../models')
const { Op } = require('sequelize')

module.exports = {
    get_all:(req,res,next)=>{
        db.Situation.findAll().then(person=>{
            res.send(person);
        }).catch(next);
    },
    get_by_id:(req,res,next)=>{
        db.Situation.findOne({
            where:{
                id:req.params.situation_id,
            }
        }).then(situation=>{
            res.send(situation);
        }).catch(next);
    },
    load_by_id:(req,res,next)=>{
        db.Situation.findByPk(req.params.situation_id)
        .then(situation=>{
            if(!situation){
                throw {status:404, message:"paslasituation"};
            }
            req.situation=situation;
            next();
        }).catch(next);
    }
}

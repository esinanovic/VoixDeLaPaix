const db = require('../models')
const { Op } = require('sequelize')

module.exports = {
    get_all:(req,res,next)=>{
        db.Violence.findAll().then(violence=>{
            res.send(violence);
        }).catch(next);
    },
    get_by_id:(req,res,next)=>{
        db.Violence.findOne({
            where:{
                id:req.params.violence_id,
            }
        }).then(violence=>{
            res.send(violence);
        }).catch(next);
    },
    get_from_situation:(req,res,next)=>{
        req.situation.getViolence().then(violence=>{
            res.send(violence);
        }).catch(next);
    }

}

const db = require('../models')
const { Op } = require('sequelize')

module.exports = {
    load_by_id:(req,res,next)=>{
        db.Person.findByPk(req.params.person_id)
        .then(person=>{
            if(!person){
                throw {status:404, message:"paslapersonne"};
            }
            req.person=person;
            next();
        }).catch(next);
    },
    get_all:(req,res,next)=>{
        db.Person.findAll().then(person=>{
            res.send(person);
        }).catch(next);
    },
    get_by_id:(req,res,next)=>{
        db.Person.findOne({
            where:{
                id:req.params.person_id,
            }
        }).then(person=>{
            res.send(person);
        }).catch(next);
    }
}

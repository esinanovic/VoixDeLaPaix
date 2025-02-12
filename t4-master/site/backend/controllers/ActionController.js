const db = require('../models')
const { Op } = require('sequelize')

module.exports = {
    get_all: (req, res, next) => {
        db.Action.findAll().then(action => {
            res.send(action);
        }).catch(next);
    },
    get_by_id: (req, res, next) => {
        db.Action.findOne({
            where: {
                id: req.params.action_id,
            }
        }).then(action => {
            res.send(action);
        }).catch(next);
    },
    get_all_actions_from_situation: (req, res, next) => {
        req.situation.getActions().then(action => {
            res.send(action);
        }).catch(next);
    }
}

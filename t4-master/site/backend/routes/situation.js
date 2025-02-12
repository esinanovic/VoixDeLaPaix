const SituationController = require('../controllers/SituationController');
const PersonController = require('../controllers/PersonController');

module.exports = [
    {
        url: '/person/:person_id/situation',
        method: 'get',
        func: [PersonController.load_by_id,SituationController.get_all]
    },
    {
        url:'/person/:person_id/situation/:situation_id',
        method:'get',
        func:[PersonController.load_by_id,SituationController.get_by_id]
    }
];
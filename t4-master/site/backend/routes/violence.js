const ViolenceController = require('../controllers/ViolenceController');
const SituationController= require('../controllers/SituationController');

module.exports = [
    {
        url: '/violence',
        method: 'get',
        func: [ViolenceController.get_all]
    },
    {
        url:'/situation/:situation_id/violence',
        method:'get',
        func:[SituationController.load_by_id,ViolenceController.get_from_situation]
    },
];
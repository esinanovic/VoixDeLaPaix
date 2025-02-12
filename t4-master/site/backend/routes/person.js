const PersonController = require('../controllers/PersonController');

module.exports = [
    {
        url: '/person',
        method: 'get',
        func: [PersonController.get_all]
    },
    {
        url:'/person/:person_id',
        method:'get',
        func:[PersonController.get_by_id]
    }
];
const ActionController= require('../controllers/ActionController');
const SituationController= require('../controllers/SituationController');

module.exports = [
    {
        url: '/action',
        method: 'get',
        func: [ActionController.get_all]
    },
    {
        url:'/action/:action_id',
        method:'get',
        func:[ActionController.get_by_id]
    },
    {
        url:'/situation/:situation_id/action',
        method:'get',
        func:[SituationController.load_by_id,ActionController.get_all_actions_from_situation]
    },
    {
        url:'/situation/:situation_id/action/:action_id',
        method:'get',
        func:[SituationController.load_by_id,ActionController.get_by_id]
    }
    ];

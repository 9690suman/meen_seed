var coreCtrl = require('../controllers/index');
module.exports = function(app){
    app.get('/',coreCtrl.renderIndex);
};

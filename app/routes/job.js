var api = require('../api/job');

module.exports = function(app) {
  app.route('/jobs')
    .get(api.list)
    .post(api.post);
  app.route('/jobs/:id')
    .get(api.find)
    .put(api.edit)
    .delete(api.del);
}
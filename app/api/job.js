var api = {};


//methods
api.list = function(req, res) {
  res.json(jobs);
}

api.post = function(req, res) {
  var job = jobs.post(function(req, res) {

  });
}

api.find = function(req, res) {
  var job = jobs.find(function(job) {
    return job._id == req.params.id;
  });
  res.json(job);
}

api.edit = function(req, res) {
  
}

api.del = function(req, res) {
  var job = jobs.find(function(req, res) {
    return jpb._id != req.params.id;
  });
  res.sendStatus(204);
}

module.exports = api;



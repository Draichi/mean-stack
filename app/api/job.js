var api = {};
var jobs = [
  {
    _id: 1,
    title: 'oi quale',
    date: new Date(),
    description: 'ajsbdkjaçsbdçakjsbdakçsjdbakçsjbdkçasjdbajkçsbdçaksjdbkajsdbakçsjdsakdjb'
  },
  {
    _id: 2,
    title: 'ja aja aj aj aj aj ',
    date: new Date(),
    description: 'ajsbdkjaçsbdçakjsbdakçsjdbakçsjbdkçasjdbajkçsbdçaksjdbkajsdbakçsjdsakdjb'
  },
  {
    _id: 3,
    title: 'lucas',
    date: new Date(),
    description: 'draichi'
  }
]

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



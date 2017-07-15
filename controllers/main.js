var modelData = require('../models/data');

/* GET home page. */
module.exports.getRoot = function(req, res, next) {
  res.status(200).json({ title: 'Express' });
};

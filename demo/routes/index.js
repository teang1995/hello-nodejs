var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET api demo*/
router.get('/api/demo', function(req, res) {
  res.status(200).json({
    'message': 'call get api demo'
  });
});

/* POST api demo */
router.post('/api/demo', function(req, res) {
  res.status(200).json({
    'message': 'call post api demo'
  });
});
module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });
});

router.get('/discovery01/jsa-esa', function(req, res) {
  res.render('discovery01/jsa-esa');
});
router.post('/discovery01/jsa-esa', function(req, res) {
  if(req.body.circs == 'No') {
    res.redirect('/discovery01/nationality');
  } else {
    res.redirect('/discovery01/gp-details');
  }
});

// add your routes here

module.exports = router;
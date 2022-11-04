const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Agora NFT Marketplace' });
});

router.get('/restricted', function(req, res, next) {
  res.status(401).json({message: "You must be logged in!" });
});

module.exports = router;

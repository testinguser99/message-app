// index.js - Health module

var express = require('express');
var impl = require('./health');

var router = express.Router();

router.get('/', (req, res, next) => { impl.health(req, res, next); } );

module.exports = router;
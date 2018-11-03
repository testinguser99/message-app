var express = require('express');
var impl = require('./message');
var router = express.Router();

router.get('/', (req, res, next) => { impl.getMessages(req, res, next); });
//router.get('/:id', (req, res) => res.send(req.params));

module.exports = router;
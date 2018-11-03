// messages.js - Messages route module

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));
router.get('/:id', (req, res) => res.send(req.params));
// router.post('/messages', (req, res) => res.send('Hello World!'));
// router.delete('/messages', (req, res) => res.send('Hello World!'));
// router.delete('/messages/:id', (req, res) => res.send('Hello World!'));

module.exports = router;
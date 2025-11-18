const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index");
});

router.get('/assignments', (req, res) => {
    res.render("assignments");
});

module.exports = router;
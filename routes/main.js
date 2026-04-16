const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.render('index')
    res.render('index.ejs', {
        pageTitle: 'Dynamic Title',
        user: 'Farzeen'
    })
})

router.get('/about', (req, res) => {
    res.render('about')
})

module.exports = router;

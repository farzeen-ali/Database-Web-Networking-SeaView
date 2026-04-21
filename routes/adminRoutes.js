const express = require('express');
const path = require('path');

const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'))
})
router.post('/login', authMiddleware , (req, res) => {
    res.sendFile(path.join(__dirname, '../views/dashboard.html'))
})

module.exports = router;
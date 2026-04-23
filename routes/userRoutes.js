const express = require('express')
const fs = require('fs')
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, '../database/data.json')

function getData(){
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

function saveData(data){
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

router.get('/users', (req, res) => {
    const users = getData();
    res.json(users)
})

router.get('/users/:id', (req, res) => {
    const users = getData();
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);

    if(!user){
        return res.status(404).json({
            message: "User Not Found!"
        })
    }
    res.json(user);
})

router.post('/users', (req, res) => {
    let users = getData();
    const newUser = {
        id: Date.now(),
        ...req.body
    };
    users.push(newUser);
    saveData(users);
    res.json(newUser);
})

module.exports = router
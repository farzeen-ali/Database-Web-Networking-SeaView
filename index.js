// const express = require('express')
// const app = express(); // instance
// const PORT = 5000;

// const students = [
//     {id: 1, name: "farzeen"},
//     {id: 2, name: "huzaifa"},
//     {id: 3, name: "ali"}
// ]

// app.get('/', (req, res) => {
//     res.send("Hello from Express JS")
// })

// app.get('/about', (req, res) => {
//     res.send("About Page")
// })
// app.get('/students', (req, res) => {
//     res.json(students);
// })
// app.listen(PORT, ()=> {
//     console.log(`Server is running on http://localhost:${PORT}`)
// })

const express = require('express')
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const mainRoutes = require('./routes/main')
const userRoutes = require('./routes/user')

app.use('/', mainRoutes)
app.use('/user', userRoutes)

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
const express = require('express');
const db = require('./db');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server Started On port : ${port}`)
})

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public/signup.html')
})

app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/public/signin.html')
})

app.get("/users", (req, res) => {
    const query = `SELECT * FROM users`
    db.all(query, (err, data) => {
        if (err) throw err;
        console.log('data user berhasil di ambil')
        res.json(data)
    });
})

app.get("/users/signin/:email", (req, res) => {
    const query = "SELECT * FROM users WHERE email = ?"
    const params = req.params.email

    db.get(query, params, (err, data) => {
        if (err) throw err;
        console.log('login berhasil')
        res.json(data)
    })
})

app.post("/users/signup", (req, res) => {
    const query = 'INSERT INTO users(email,password) VALUES(?,?)';
    const params = [req.body.email, req.body.password]
    db.run(query, params, (err, data) => {
        if (err) throw err;
        console.log("data user berhasil di tambah");
        res.redirect('/signin')
    })
})


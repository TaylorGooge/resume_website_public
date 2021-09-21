let express = require('express')
let app = express()
let mysql = require('mysql')
let port = process.env.PORT || 3656
let path = require('path')
app.set("view engine", "ejs")

app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname + "/styles")))
app.use(express.static(path.join(__dirname + "/images")))
app.use(express.static(path.join(__dirname + "/scripts")))


app.set('port', port)
let pool = mysql.createPool({
    user: '',
    password: '',
    host: '',
    port: '',
    database: '',
    sslmode: 'REQUIRED'
})
if (pool) { // mysql is started && connected successfully.
    console.log('Connection Success')
} else {
    console.log('Cant connect to db, Check ur db connection')
}
app.get('/', function (req, res, next) {
    res.render('index')
 })
app.get('/blog', function (req, res, next) {
    res.render('blog')
 })
app.get('/about', function (req, res, next) {
    res.render('about')
})
app.get('/blogposts', function (req, res, next) {
    pool.query('SELECT * FROM blog' , function (err, result) {
        if (err) {
            throw (err)
        }
        let rez = JSON.stringify(result)
        res.send(rez)
    })
})
app.get('/projects', function (req, res, next) {
    pool.query('SELECT * FROM projects' , function (err, result) {
        if (err) {
            throw (err)
        }
        let rez = JSON.stringify(result)
        res.send(rez)
       })
})
app.listen(app.get('port'), function () {
    console.log('Express started on server press Ctrl-C to terminate.')
})

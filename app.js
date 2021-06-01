const express = require ('express');
const mongoose = require('mongoose');
const path =  require('path');
const ejsMate = require('ejs-mate');
const host = '0.0.0.0';
const port = process.env.PORT || 5000;





mongoose.connect('mongodb://localhost/test',
{
    useNewUrlParser: true, 
    useUnifiedTopology:true,
    useCreateIndex: true,
});

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
     console.log('Database connected')
    });


const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))
app.use(express.static('assets'))


app.get('/',(req, res) =>{
    res.render('home')
});

app.get('/project',(req, res) =>{
    res.render('project')
});

app.get('/service',(req, res) =>{
    res.render('service')
});

app.get('/about',(req, res) =>{
    res.render('about')
});

app.get('/contact',(req, res) =>{
    res.render('contact')
});
app.get('/team',(req, res) =>{
    res.render('team')
});

app.listen(port, host, function() {
    console.log("Server started.......");
  });
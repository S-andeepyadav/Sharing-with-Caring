const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('./index');
});

// app.get('*', (req, res) => {
//     res.render('404');
// });

app.get('/login', (req, res) => {
    res.render('./auth/login');
});
app.get('/signup', (req, res) => {
    res.render('./auth/signup');
});
app.get('/reset', (req, res) => {
    res.render('./auth/reset');
});
app.get('/dashboard', (req, res) => {
    res.render('./dashboard/index');
});
app.get('/dashboard/profile', (req, res) => {
    res.render('./dashboard/profile');
});
app.get('/about', (req, res) => {
    res.render('./about');
});
app.get('/contact', (req, res) => {
    res.render('./contact');
});


app.listen(3000)
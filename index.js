const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));
app.set('view engine', 'ejs');
// Render the index.ejs file
app.get('/', (req, res) => {
    res.render('index');
});
app.listen(3000)
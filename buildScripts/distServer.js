import express from "express";
import path from "path";
import open from "open";
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/users', function (req, res) {
    res.json([
        {'id':1, 'firstname':'Joe', 'lastname':'Smith', 'email':'joe.smith@gmail.com'},
        {'id':2, 'firstname':'Kevin', 'lastname':'Yeh', 'email':'kevin.yeh@gmail.com'},
        {'id':3, 'firstname':'Lavendar', 'lastname':'Kao', 'email':'lavendar.kao@gmail.com'}
    ]);
});



app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err){
    if (err) {
        console.log(err); // eslint-disable-line no-console
    } else {
        open('http://localhost:' + port);
    }
});

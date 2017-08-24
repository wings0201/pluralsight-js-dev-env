import express from "express";
import path from "path";
import open from "open";
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath : config.output.publicPath
}));

app.get('/users', function (req, res) {
    res.json([
        {'id':1, 'firstname':'Joe', 'lastname':'Smith', 'email':'joe.smith@gmail.com'},
        {'id':2, 'firstname':'Kevin', 'lastname':'Yeh', 'email':'kevin.yeh@gmail.com'},
        {'id':3, 'firstname':'Lavendar', 'lastname':'Kao', 'email':'lavendar.kao@gmail.com'}
    ]);
});

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
    if (err) {
        console.log(err); // eslint-disable-line no-console
    } else {
        open('http://localhost:' + port);
    }
});

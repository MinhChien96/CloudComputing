const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const routes = require('./config/routes');
var morgan = require('morgan');
var fs = require('fs');
const passport = require('passport');
var https = require('https');

var verifyToken = require('./api/middleware/verifyToken');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// Enable CORS from client-side,
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

verifyToken.initVerifyToken(passport);
routes.initRoutes(app, express);

var port = process.env.PORT || 3000;

// var options = {
//     key  : fs.readFileSync('ssl/key.pem'),
//     ca   : fs.readFileSync('ssl/csr.pem'),
//     cert : fs.readFileSync('ssl/cert.pem')
// }
// var httpsServer = https.createServer(options,app);
// httpsServer.listen(3001,()=>{
//     console.log("Server https running is port: 3001");
// });
app.listen(port,function(){
    console.log("Server running is port: ",port);
});

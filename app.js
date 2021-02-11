const express = require('express');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const path = require('path');
const sequelize = require('./config/database');

const gigRouter = require('./routes/gigs');


//Test DB
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch((err) => console.log('Error' + err))

const app = express();

//Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine', 'handlebars');
// Body Parser
app.use(bodyParser.urlencoded({extended: false}));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));
//Index route
app.get('/', (req, res, next) => res.render('index', {layout: 'landing'}));

//Gig Routes
app.use('/gigs', gigRouter);

var PORT= process.env.PORT || 5000;

app.listen(PORT, console.log(`Listening on port: ${PORT}`))
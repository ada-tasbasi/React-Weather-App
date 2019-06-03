const path = require("path"),
      express = require("express"),
      bodyParser = require("body-parser"),
      ENV = process.env.NODE_ENV,
      PORT = process.env.PORT||5000;

var db = require("./database");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.send("<h2>Hello World</h2>")
})

app.use('/api/cities', require('./api/cities'));
app.use('/api/weather', require('./api/weather'));

app.listen(PORT, ()=> console.log(`Server listening on ${PORT}`));

db.query('SELECT NOW()', (err, res)=>{
    if(err.error){
        return console.log(err.error);
    }
    console.log(`PostgreSQL connected: ${res[0].now}.`);
});

module.exports = app;
